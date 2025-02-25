import { FreshnessTimer } from "@/app/_components/timer";
import { H1, H2, H3 } from "@/components/headings";
import { ContainerWrapper, SectionWrapper } from "@/components/wrappers";

export default function StaticPage() {
  const generatedAt = Date.now();

  return (
    <>
      <ContainerWrapper>
        <SectionWrapper>
          <FreshnessTimer generatedAt={generatedAt} />
          <H1>Static Page</H1>
          <p className="text-muted-foreground text-pretty">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            impedit quidem doloribus, earum, aspernatur ab optio ea delectus
            enim adipisci deserunt ipsam voluptate eius, labore in?
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <H2>
            Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet
            consectetur..
          </H2>
          <p className="text-muted-foreground text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga
            eos delectus repellendus exercitationem iste voluptatem, laborum
            autem accusantium nesciunt omnis fugit minima, architecto
            recusandae, voluptas id! Necessitatibus voluptates fugit, vel,
            corporis nobis autem suscipit dolorem molestiae reiciendis facere
            beatae, doloremque asperiores veniam iste omnis fugiat vitae fuga
            nostrum et.
          </p>
          <H3>Lorem ipsum dolor sit amet consectetur adipisicing.</H3>
          <p className="text-muted-foreground text-pretty">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse amet
            quod tempore aliquam libero fugit laudantium, sapiente, dolore
            quaerat illum, eos fugiat.
          </p>
        </SectionWrapper>
      </ContainerWrapper>
    </>
  );
}
