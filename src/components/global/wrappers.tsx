import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Section({
  children,
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("py-8 md:py-12", className)} {...props}>
      {children}
    </section>
  );
}

export function Container({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto size-full max-w-6xl", "px-6 sm:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
