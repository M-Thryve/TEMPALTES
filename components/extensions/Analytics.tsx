"use client";

import { useExtensions } from "./ExtensionProvider";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function GtagScript({ analytics_id }: { analytics_id: string }) {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${analytics_id}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analytics_id}');
          `,
        }}
      />
    </>
  );
}

export default function Analytics() {
  const ext = useExtensions();

  if (ext.google_analytics.enabled && ext.google_analytics.analytics_id) {
    return <GtagScript analytics_id={ext.google_analytics.analytics_id} />;
  }

  return null;
}
