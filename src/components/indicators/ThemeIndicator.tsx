"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeIndicator() {
  const { setTheme } = useTheme();

  return (
    <>
      <button className="block dark:hidden" onClick={() => setTheme("dark")}>
        <Moon size={20} />
      </button>
      <button className="hidden dark:block" onClick={() => setTheme("light")}>
        <Sun size={20} />
      </button>
    </>
  );
}
