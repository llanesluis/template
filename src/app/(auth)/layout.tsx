import { ReactNode } from "react";
import { SessionProvider } from "../providers";
import { getSession } from "@/lib/session";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  // don't await, get the promise instead (still opts out of static rendering tho)
  const sessionPromise = getSession();

  //Pages within (auth) will be dynamic because the layout uses a dynamic APIs
  return <SessionProvider session={sessionPromise}>{children}</SessionProvider>;
}
