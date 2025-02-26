import { FreshnessTimer } from "@/app/_components/timer";
import { H1, H2 } from "@/components/headings";
import { ContainerWrapper, SectionWrapper } from "@/components/wrappers";
import Link from "next/link";

export default function BlogPage() {
  const generatedAt = Date.now();

  return (
    <ContainerWrapper>
      <SectionWrapper className="space-y-4">
        <FreshnessTimer generatedAt={generatedAt} />

        <H1>Blog - Static</H1>
        <p className="text-muted-foreground text-pretty">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odit
          nisi maxime, mollitia quos unde molestiae fugit quisquam
          exercitationem, laudantium aliquid?
        </p>
      </SectionWrapper>

      <SectionWrapper className="space-y-4">
        <H2>blog/[slug] - generateStaticParams() + dynamicParams = false</H2>
        <ol className="flex list-inside list-decimal flex-col gap-2">
          <li>
            <Link href={"/blog/1"} className="hover:text-muted-foreground">
              Blog entry 1
            </Link>
          </li>
          <li>
            <Link href={"/blog/2"} className="hover:text-muted-foreground">
              Blog entry 2
            </Link>
          </li>
          <li>
            <Link href={"/blog/3"} className="hover:text-muted-foreground">
              Blog entry 3
            </Link>
          </li>
          <li>
            <Link href={"/blog/4"} className="hover:text-muted-foreground">
              Blog entry 4
            </Link>
          </li>
          <li>
            <Link href={"/blog/5"} className="hover:text-muted-foreground">
              Blog entry not found
            </Link>
          </li>
        </ol>
      </SectionWrapper>
    </ContainerWrapper>
  );
}
