"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/utils/constants";
import { Sidebar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const styles = getComputedStyle(document.documentElement);
      const remPixels = styles.fontSize;

      const breakpointMd = styles
        .getPropertyValue("--breakpoint-md")
        .slice(0, -3); // removes "rem" from the end;

      const breakpointMdInPx = parseInt(breakpointMd) * parseInt(remPixels);

      if (window.innerWidth > breakpointMdInPx) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Button
        className="inline-flex p-0 md:hidden"
        variant={"link"}
        onClick={() => setIsOpen(true)}
      >
        <Sidebar className="size-5" />
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="min-w-[70%]">
          {/* if i don't put a SheetTitle it complains */}
          <SheetTitle />

          <nav className="group flex h-full flex-col justify-end gap-8 px-8 py-20">
            {NAV_LINKS.map(({ href, title }) => (
              <Link
                key={href}
                href={href}
                className="text-4xl font-bold lowercase transition-all ease-out hover:translate-x-2 hover:text-neutral-500"
              >
                {title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
