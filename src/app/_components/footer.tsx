import { Wrapper } from "@/components/global/wrappers";

export default function Footer() {
  return (
    <footer className="h-16 border-t">
      <Wrapper className="grid place-items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} luisllaboj. All rights reserved.
        </p>
      </Wrapper>
    </footer>
  );
}
