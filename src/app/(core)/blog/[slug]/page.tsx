import { H1 } from "@/components/headings";
import { ContainerWrapper, SectionWrapper } from "@/components/wrappers";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ slug: "1" }, { slug: "2" }, { slug: "3" }, { slug: "4" }];
}

interface Props {
  // params are always parsed as strings by default
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return (
    <ContainerWrapper>
      <SectionWrapper className="space-y-4">
        <H1>{slug}</H1>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          officiis esse sed repellat, at illum eligendi sunt perspiciatis
          impedit sequi ipsam vel magni ratione excepturi nihil cupiditate.
          Excepturi, officiis quibusdam!
        </p>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          placeat quasi! Quia consequuntur laboriosam dolorem. Autem, sit. Ipsam
          nostrum omnis odio impedit, illum soluta deleniti porro fuga iusto.
          Molestias iste soluta, magnam ad ipsam odio harum velit nobis quidem
          aperiam incidunt animi! Odio minima ab ex sunt qui impedit optio.
        </p>
      </SectionWrapper>
    </ContainerWrapper>
  );
}
