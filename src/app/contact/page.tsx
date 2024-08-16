import { Container, Section } from "@/components/global/wrappers";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-5xl font-bold">Contact me</h1>
        <p className="text-pretty">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem odit
          nisi maxime, mollitia quos unde molestiae fugit quisquam
          exercitationem, laudantium aliquid?
        </p>

        <form className="flex flex-col gap-4">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <button type="submit">Send</button>
        </form>
      </Container>
    </Section>
  );
}
