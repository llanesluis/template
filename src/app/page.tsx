import BackgroundEffect from "@/components/background-effect";
import { H1, H2, H3 } from "@/components/headings";
import { ContainerWrapper, SectionWrapper } from "@/components/wrappers";
import { Suspense } from "react";
import FormActionExample from "./page.client";

export default function HomePage() {
  return (
    <>
      <section className="border-b">
        <ContainerWrapper className="wrapper relative">
          <BackgroundEffect />

          <SectionWrapper className="space-y-2">
            <H1>Hello World!</H1>
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
          </SectionWrapper>

          {/* if Suspense is omitted the whole page will suspend*/}
          <Suspense fallback={<FormActionExampleFallback />}>
            {/* useFormAction + Server Action + FormData + Clousure over React State */}
            <FormActionExample />
          </Suspense>
        </ContainerWrapper>
      </section>
    </>
  );
}

function FormActionExampleFallback() {
  return (
    <div className="flex h-[232px] animate-pulse place-items-center justify-center bg-muted/70">
      Loading...
    </div>
  );
}
