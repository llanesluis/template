import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof Button> {
  isLoading?: boolean;
}

export function LoadingButton({ isLoading, children, ...props }: Props) {
  return (
    <Button
      {...props}
      disabled={isLoading}
      className="loading-button cursor-pointer rounded-none"
    >
      <span className={cn("content", isLoading ? "invisible" : "visible")}>
        {children}
      </span>
      <span
        className={cn(
          "loader animate-spin",
          isLoading ? "visible" : "invisible",
        )}
      >
        <Loader />
      </span>
    </Button>
  );
}
