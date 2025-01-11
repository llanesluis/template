import { Wrapper, Section } from "@/components/wrappers";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function RootNotFound() {
  return (
    <main>
      <Section className="h-full">
        <Wrapper className="grid place-content-center gap-4 font-mono max-sm:place-items-start sm:text-center">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="text-muted-foreground">
            The page you are looking for does not exist.
          </p>

          <Button className="flex items-center gap-2 p-0" variant="link">
            <MoveLeft />
            <Link href={"/"}>Go back home</Link>
          </Button>
        </Wrapper>
      </Section>
    </main>
  );
}
