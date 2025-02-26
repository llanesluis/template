import ExternalLink from "@/components/external-link";
import VisuallyHidden from "@/components/devtools/visually-hidden";
import { ContainerWrapper } from "@/components/wrappers";
import Link from "next/link";
import MobileNavigation from "./mobile-navigation";
import MainNavigation from "./main-navigation";
import GitHub from "@/components/icons/github";

export default function Navbar() {
  return (
    <header className="bg-background/85 sticky top-0 z-50 h-16 border-b backdrop-blur">
      <ContainerWrapper>
        <div className="flex size-full items-center justify-between gap-4">
          <Link className="mr-auto font-semibold" href="/">
            llanesluis
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
        </div>
      </ContainerWrapper>
    </header>
  );
}
