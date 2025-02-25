import { H1 } from "@/components/headings";
import { ContainerWrapper, SectionWrapper } from "@/components/wrappers";
import { getSession } from "@/lib/session";
import { Suspense } from "react";

export default async function SignInPage() {
  return (
    <ContainerWrapper>
      <SectionWrapper>
        <Suspense fallback={<p className="animate-pulse">Loading user...</p>}>
          <CurrentUserServer />
        </Suspense>

        <H1>Sign In - Dynamic</H1>
        <p className="text-muted-foreground text-pretty">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odit
          nisi maxime, mollitia quos unde molestiae fugit quisquam
          exercitationem, laudantium aliquid?
        </p>
      </SectionWrapper>
    </ContainerWrapper>
  );
}

async function CurrentUserServer() {
  const session = await getSession();
  return (
    <p className="text-muted-foreground">
      userId:{" "}
      <span className="text-foreground font-semibold">{session.userId}</span>
    </p>
  );
}
