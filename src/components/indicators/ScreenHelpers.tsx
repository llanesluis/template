import { Sun } from "lucide-react";
import ThemeIndicator from "./ThemeIndicator";
import ScreenSizeIndicator from "./ScreenSizeIndicator";

export function ScreenHelpers() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="text-md fixed bottom-5 left-5 isolate flex h-10 w-fit items-center justify-between gap-4 rounded bg-background/20 p-2 text-sm font-bold shadow-lg ring-1 ring-primary/5 backdrop-blur-md ">
      <ScreenSizeIndicator />
      <ThemeIndicator />
    </div>
  );
}
