import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { ComponentProps } from "react";

interface ExternalLinkProps extends ComponentProps<"a"> {
  showIcon?: boolean;
}

export default function ExternalLink({
  href,
  className,
  children,
  title,
  showIcon,
  ...rest
}: ExternalLinkProps) {
  if (!href || !children) return null;

  return (
    <a
      title={title}
      href={href}
      className={cn("flex w-fit items-center justify-between", className)}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
      {showIcon && <ArrowUpRight size={14} />}
    </a>
  );
}
