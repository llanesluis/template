import ExternalLink from "./external-link";
import VisuallyHidden from "./visually-hidden";

export default function Header() {
  return (
    <header className="h-12 border-b">
      <div className="container flex h-full items-center justify-between">
        <div>
          <p className="font-semibold">luisllaboj</p>
          <VisuallyHidden>logo</VisuallyHidden>
        </div>
        <Links />
      </div>
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
