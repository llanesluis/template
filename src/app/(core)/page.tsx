"use client";

import { H1, H2, H3 } from "@/components/global/headings";
import { Wrapper, Section } from "@/components/global/wrappers";
import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/ui/loading-button";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main>
      <Section>
        <Wrapper>
          <H1>Hello World! h1</H1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            incidunt quaerat suscipit ipsam repudiandae dolor.
          </p>
          <H2>Hello World! h2</H2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            incidunt quaerat suscipit ipsam repudiandae dolor.
          </p>
          <H3>Hello World! h3</H3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            incidunt quaerat suscipit ipsam repudiandae dolor.
          </p>

          <Button onClick={() => setIsLoading(!isLoading)}>
            Toggle loading state
          </Button>
          <LoadingButton isLoading={isLoading} variant={"destructive"}>
            Loading button
          </LoadingButton>
        </Wrapper>
      </Section>
    </main>
  );
}
