import { Container, Section } from "@/components/global/wrappers";

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-bold">About</h1>
        <p className="text-pretty">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo impedit
          quidem doloribus, earum, aspernatur ab optio ea delectus enim adipisci
          deserunt ipsam voluptate eius, labore in?
        </p>

        <h2 className="text-pretty text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet
          consectetur..
        </h2>
        <p className="text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga
          eos delectus repellendus exercitationem iste voluptatem, laborum autem
          accusantium nesciunt omnis fugit minima, architecto recusandae,
          voluptas id! Necessitatibus voluptates fugit, vel, corporis nobis
          autem suscipit dolorem molestiae reiciendis facere beatae, doloremque
          asperiores veniam iste omnis fugiat vitae fuga nostrum et.
        </p>
      </Container>
    </Section>
  );
}
