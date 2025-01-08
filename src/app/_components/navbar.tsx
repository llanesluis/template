import ExternalLink from "@/components/global/external-link";
import VisuallyHidden from "@/components/global/visually-hidden";
import { Wrapper } from "@/components/global/wrappers";
import Link from "next/link";
import MobileNavigation from "./mobile-navigation";
import MainNavigation from "./main-navigation";
import GitHub from "@/components/icons/github";

export default function Navbar() {
  return (
    <header className="h-16 border-b">
      <Wrapper className="flex items-center justify-between gap-4">
        <Link className="mr-auto font-semibold" href="/">
          luisllaboj
          <VisuallyHidden>logo</VisuallyHidden>
        </Link>

        <MainNavigation />

        <ExternalLink
          title="GitHub"
          href="https://github.com/llanesluis/template"
          showIcon
        >
          <GitHub className="size-5" />
        </ExternalLink>

        <MobileNavigation />
      </Wrapper>
    </header>
  );
}
