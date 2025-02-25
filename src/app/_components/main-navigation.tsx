"use client";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4 max-md:hidden">
      {NAV_LINKS.map(({ href, title }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "font-semibold lowercase transition-all ease-out hover:translate-y-[-2px] hover:text-neutral-500",
            href === pathname && "text-red-500 underline",
          )}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
