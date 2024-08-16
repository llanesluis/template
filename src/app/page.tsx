import { H1, H2, H3 } from "@/components/global/headings";
import { Container, Section } from "@/components/global/wrappers";

export default function Home() {
  return (
    <Section>
      <Container>
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
      </Container>
    </Section>
  );
}
