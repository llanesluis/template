import ExternalLink from "./global/external-link";
import VisuallyHidden from "./global/visually-hidden";
import { Container } from "./global/wrappers";

export default function Header() {
  return (
    <header className="h-16 border-b">
      <Container className="flex items-center justify-between">
        <span>
          <p className="font-semibold">luisllaboj</p>
          <VisuallyHidden>logo</VisuallyHidden>
        </span>
        <Links />
      </Container>
    </header>
  );
}

function Links() {
  return (
    <div className="flex items-center gap-2">
      <ExternalLink
        title="GitHub"
        href="https://github.com/llanesluis"
        showIcon
      >
        GitHub
      </ExternalLink>
      <ExternalLink
        title="LinkedIn"
        href="https://linkedin.com/in/llanesluis"
        showIcon
      >
        LinkedIn
      </ExternalLink>
    </div>
  );
}
