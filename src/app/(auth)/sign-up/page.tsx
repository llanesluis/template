import { H1 } from "@/components/headings";
import { ContainerWrapper, SectionWrapper } from "@/components/wrappers";
import { Suspense } from "react";
import { CurrentUserClient } from "./page.client";
import { getSession } from "@/lib/session";

export default async function SignUpPage() {
  // get the promise and pass to client component
  const sessionPromise = getSession();

  return (
    <ContainerWrapper>
      <SectionWrapper>
        <Suspense fallback={<p className="animate-pulse">Loading user...</p>}>
          <CurrentUserClient sessionPromise={sessionPromise} />
        </Suspense>

        <H1>Sign Up - Dynamic</H1>
        <p className="text-muted-foreground text-pretty">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odit
          nisi maxime, mollitia quos unde molestiae fugit quisquam
          exercitationem, laudantium aliquid?
        </p>
      </SectionWrapper>
    </ContainerWrapper>
  );
}
