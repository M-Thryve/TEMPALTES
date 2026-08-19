"use client";

import { createContext, useContext } from "react";
import type { ExtensionsConfig } from "@/content/extensions";

const ExtensionsContext = createContext<ExtensionsConfig | null>(null);

export function useExtensions(): ExtensionsConfig {
  const ctx = useContext(ExtensionsContext);
  if (!ctx) {
    throw new Error("useExtensions must be used within an ExtensionProvider");
  }
  return ctx;
}

type ExtensionProviderProps = {
  config: ExtensionsConfig;
  children: React.ReactNode;
};

export default function ExtensionProvider({
  config,
  children,
}: ExtensionProviderProps) {
  return (
    <ExtensionsContext.Provider value={config}>
      {children}
    </ExtensionsContext.Provider>
  );
}
