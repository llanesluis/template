"use client";

import { getSession } from "@/lib/session";
import { ThemeProvider } from "next-themes";
import { createContext, ReactNode, use } from "react";

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

type SessionContextType = Promise<{ user: string }>;

export const SessionContext = createContext<SessionContextType | undefined>(
  undefined,
);

export function SessionProvider({
  children,
  session,
}: {
  children: ReactNode;
  session: Promise<{ user: string }>;
}) {
  return <SessionContext value={session}>{children}</SessionContext>;
}

export function useSession() {
  const context = use(SessionContext);

  if (context === undefined) {
    throw Error("'useSession' must be used within a SessionProvider");
  }

  return context;
}
