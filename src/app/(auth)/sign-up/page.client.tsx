"use client";

import { use } from "react";

export function CurrentUserClient({
  sessionPromise,
}: {
  sessionPromise: Promise<{ userId: string }>;
}) {
  const session = use(sessionPromise);

  return (
    <p className="text-muted-foreground">
      userId:{" "}
      <span className="text-foreground font-semibold">{session.userId}</span>
    </p>
  );
}
