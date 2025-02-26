"use client";

import { useState, useEffect } from "react";

export function FreshnessTimer({ generatedAt }: { generatedAt: number }) {
  const [secondsElapsed, setSecondsElapsed] = useState<number | null>(null);

  useEffect(() => {
    const updateTimer = () => {
      setSecondsElapsed(Math.floor((Date.now() - generatedAt) / 1000));
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [generatedAt]);

  return (
    <div className="bg-muted text-muted-foreground relative w-fit border px-2 py-1 text-pretty">
      <p className="text-xs">
        Last generated:{" "}
        <span className="text-foreground font-semibold">
          {new Date(generatedAt).toUTCString()}
        </span>
      </p>

      <p className="">
        Data has been fresh for:{" "}
        <span className="text-foreground font-semibold">
          {secondsElapsed !== null
            ? `${secondsElapsed} second${secondsElapsed !== 1 ? "s" : ""}`
            : ""}
        </span>
      </p>
    </div>
  );
}
