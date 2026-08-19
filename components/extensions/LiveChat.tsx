"use client";

import { useEffect } from "react";
import { useExtensions } from "./ExtensionProvider";

function TawkToWidget({ widget_id }: { widget_id: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${widget_id}`;
    script.charset = "UTF-8";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [widget_id]);

  return null;
}

function CrispWidget({ widget_id }: { widget_id: string }) {
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;
    w["$crisp"] = [];
    w["CRISP_WEBSITE_ID"] = widget_id;

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [widget_id]);

  return null;
}

export default function LiveChat() {
  const ext = useExtensions();

  if (ext.tawk_to.enabled && ext.tawk_to.widget_id) {
    return <TawkToWidget widget_id={ext.tawk_to.widget_id} />;
  }

  if (ext.crisp.enabled && ext.crisp.widget_id) {
    return <CrispWidget widget_id={ext.crisp.widget_id} />;
  }

  return null;
}
