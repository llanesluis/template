"use client";

import { getSession } from "@/lib/session";
import { ThemeProvider } from "next-themes";
import { createContext, ReactNode } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export const SessionContext = createContext<Promise<{ user: string }>>(null!);

export function SessionProvider({
  children,
  session,
}: {
  children: ReactNode;
  session: Promise<{ user: string }>;
}) {
  return <SessionContext value={session}>{children}</SessionContext>;
}
