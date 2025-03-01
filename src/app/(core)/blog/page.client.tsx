"use client";

import { FreshnessTimer } from "@/app/_components/timer";
import { H1, H3 } from "@/components/headings";
import { ContainerWrapper, SectionWrapper } from "@/components/wrappers";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Dashboard({ initialData }: { initialData: number }) {
  const searchParams = useSearchParams();

  return (
    <ContainerWrapper className="bg-muted/50">
      <SectionWrapper className="space-y-6">
        <header>
          <H1>Dashboard</H1>
          <H3 className="text-muted-foreground">
            SearcParams : {searchParams.toString()}
          </H3>
          <H3 className="text-muted-foreground">
            Initial data : {new Date(initialData).toUTCString()}
          </H3>
        </header>

        <div className="flex flex-wrap justify-between gap-4 rounded-full">
          <Link
            href={"/blog?test=works"}
            className="bg-muted h-fit w-46 border"
          >
            Root
            <FreshnessTimer generatedAt={initialData} />
          </Link>
          <Link
            href={"/blog/1?test=works1"}
            className="bg-muted h-fit w-46 border"
          >
            1 <FreshnessTimer generatedAt={initialData} />
          </Link>
          <Link
            href={"/blog/2?test=works2"}
            className="bg-muted h-fit w-46 border"
          >
            2 <FreshnessTimer generatedAt={initialData} />
          </Link>
          <Link
            href={"/blog/3?test=works3"}
            className="bg-muted h-fit w-46 border"
          >
            3 <FreshnessTimer generatedAt={initialData} />
          </Link>
          <Link
            href={"/blog/4?test=works4"}
            className="bg-muted h-fit w-46 border"
          >
            4 <FreshnessTimer generatedAt={initialData} />
          </Link>
        </div>
      </SectionWrapper>
    </ContainerWrapper>
  );
}
