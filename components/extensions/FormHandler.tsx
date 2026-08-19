"use client";

import { useCallback } from "react";
import { useExtensions } from "./ExtensionProvider";

type FormPayload = Record<string, string>;

type SubmitResult = {
  ok: boolean;
  method: "crm" | "email" | "local";
  error?: string;
};

export function useFormHandler(formType: "quote" | "contact") {
  const ext = useExtensions();

  const submitForm = useCallback(
    async (data: FormPayload): Promise<SubmitResult> => {
      if (ext.crm_lead_management.enabled) {
        const endpoint =
          formType === "quote"
            ? ext.crm_lead_management.quote_form_endpoint
            : ext.crm_lead_management.contact_form_endpoint;

        if (endpoint) {
          try {
            const res = await fetch(endpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ext.crm_lead_management.api_key}`,
              },
              body: JSON.stringify({ ...data, form_type: formType }),
            });

            if (!res.ok) {
              return { ok: false, method: "crm", error: `HTTP ${res.status}` };
            }

            return { ok: true, method: "crm" };
          } catch (err) {
            return {
              ok: false,
              method: "crm",
              error: err instanceof Error ? err.message : "Network error",
            };
          }
        }
      }

      if (ext.email_service.enabled) {
        const email =
          formType === "quote"
            ? ext.email_service.quote_notification_email
            : ext.email_service.contact_notification_email;

        if (email) {
          return { ok: true, method: "email" };
        }
      }

      return { ok: true, method: "local" };
    },
    [ext, formType]
  );

  return { submitForm };
}
