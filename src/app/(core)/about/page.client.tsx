"use client";

import { SessionContext } from "@/app/providers";
import { use } from "react";

export default function ClientComponent() {
  const sessionPromise = use(SessionContext);
  const session = use(sessionPromise);

  return <div>User: {session.user}</div>;
}
