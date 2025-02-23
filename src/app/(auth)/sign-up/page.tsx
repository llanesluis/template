import { H1 } from "@/components/headings";
import { ContainerWrapper, SectionWrapper } from "@/components/wrappers";

export default async function SignUpPage() {
  return (
    <ContainerWrapper>
      <SectionWrapper>
        <H1>Sign Up</H1>
        <p className="text-pretty">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odit
          nisi maxime, mollitia quos unde molestiae fugit quisquam
          exercitationem, laudantium aliquid?
        </p>
      </SectionWrapper>
    </ContainerWrapper>
  );
}
