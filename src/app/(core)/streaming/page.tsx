import { H1 } from "@/components/headings";
import { ContainerWrapper, SectionWrapper } from "@/components/wrappers";
import CommaSeparatedInput from "./_components/comma-separated-input";
import { Suspense } from "react";
import FormActionExample from "@/app/(core)/streaming/page.client";
import { getSession } from "@/lib/session";
import { LoadingButton } from "@/components/loading-button";

export const dynamic = "force-dynamic";

export default async function StreamingPage() {
  const sessionPromise = getSession();
  return (
    <>
      <ContainerWrapper>
        <SectionWrapper>
          <H1>Contact me - Dynamic & Streaming</H1>
          <p className="text-muted-foreground text-pretty">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odit
            nisi maxime, mollitia quos unde molestiae fugit quisquam
            exercitationem, laudantium aliquid?
          </p>
        </SectionWrapper>

        <SectionWrapper>
          {/* if Suspense is omitted the whole page will suspend*/}
          <Suspense fallback={<FormActionExampleFallback />}>
            {/* useFormAction + Server Action + FormData + Clousure over React State */}
            <FormActionExample sessionPromise={sessionPromise} />
          </Suspense>
        </SectionWrapper>

        <SectionWrapper>
          <form className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-muted p-1"
            />
            <label className="flex flex-col">
              Tags
              <CommaSeparatedInput />
            </label>
            <LoadingButton type="submit">Send</LoadingButton>
          </form>
        </SectionWrapper>
      </ContainerWrapper>
    </>
  );
}

function FormActionExampleFallback() {
  return (
    <div className="bg-muted/70 flex h-[232px] animate-pulse place-items-center justify-center">
      Simulated loading...
    </div>
  );
}
