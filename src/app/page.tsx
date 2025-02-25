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
    <>
      <section className="border-b">
        <ContainerWrapper className="wrapper relative">
          <BackgroundEffect />

          <SectionWrapper className="space-y-2">
            <FreshnessTimer generatedAt={generatedAt} />
            <H1>Hello World! - ISR</H1>
            <p className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, incidunt quaerat suscipit ipsam repudiandae dolor.
            </p>
            <H2>Hello World!</H2>
            <p className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, incidunt quaerat suscipit ipsam repudiandae dolor.
            </p>
            <H3>Hello World!</H3>
            <p className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, incidunt quaerat suscipit ipsam repudiandae dolor.
            </p>

            <form action={revalidateAction}>
              <Button className="rounded-none">Revalidate page</Button>
            </form>
          </SectionWrapper>
        </ContainerWrapper>
      </section>
    </>
  );
}
