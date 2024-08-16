import Link from "next/link";
import ExternalLink from "./global/external-link";
import VisuallyHidden from "./global/visually-hidden";
import { Container } from "./global/wrappers";

const NAV_LINKS = [
  { href: "/about", title: "About" },
  { href: "/contact", title: "Contact" },
];

export default function Header() {
  return (
    <header className="h-16 border-b">
      <Container className="flex items-center justify-between">
        <Link className="font-semibold" href="/">
          luisllaboj
          <VisuallyHidden>logo</VisuallyHidden>
        </Link>

        <nav className="flex items-center gap-4">
          {NAV_LINKS.map(({ href, title }) => (
            <Link key={href} href={href}>
              {title}
            </Link>
          ))}
        </nav>

        <ExternalLinks />
      </Container>
    </header>
  );
}

function ExternalLinks() {
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
