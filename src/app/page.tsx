import BackgroundEffect from "@/components/background-effect";
import { H1, H2, H3 } from "@/components/headings";
import { ContainerWrapper, SectionWrapper } from "@/components/wrappers";
import { FreshnessTimer } from "./_components/timer";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";

export const revalidate = 15;

async function revalidateAction() {
  "use server";

  revalidatePath("/");
}

export default function HomePage() {
  const generatedAt = Date.now();

  return (
    <section>
      <ContainerWrapper className="relative">
        <BackgroundEffect />

        <SectionWrapper className="space-y-4">
          <FreshnessTimer generatedAt={generatedAt} />

          <H1>Hello World! - ISR</H1>
          <p className="text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            incidunt quaerat suscipit ipsam repudiandae dolor.
          </p>
          <H2>
            This page will be revalidated 15 seconds after being generated if
            requested by someone.
          </H2>
          <p className="text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            incidunt quaerat suscipit ipsam repudiandae dolor.
          </p>
          <H3>
            Revalidate this page on demand to force the page to be re-generated
          </H3>
          <p className="text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            incidunt quaerat suscipit ipsam repudiandae dolor.
          </p>

          <form action={revalidateAction}>
            <Button className="rounded-none">Revalidate page</Button>
          </form>
        </SectionWrapper>
      </ContainerWrapper>
    </section>
  );
}
