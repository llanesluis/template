import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  title?: string;
  children?: ReactNode;
  className?: string;
  indicatorIcon?: boolean;
}

export default function ExternalLink({
  href,
  className,
  children,
  title,
  indicatorIcon,
}: ExternalLinkProps) {
  if (!href || !children) return null;

  return (
    <a
      title={title}
      href={href}
      className={cn("flex w-fit items-center justify-between", className)}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children || title}
      {indicatorIcon && <ArrowUpRight size={14} />}
    </a>
  );
}
