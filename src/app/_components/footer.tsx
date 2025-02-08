import ExternalLink from "@/components/external-link";
import { ContainerWrapper } from "@/components/wrappers";

export default function Footer() {
  return (
    <footer className="border-t">
      <ContainerWrapper>
        <div className="flex items-center justify-between py-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} llanesluis.
          </p>

          <ExternalLink
            title="GitHub"
            href="https://github.com/llanesluis/template"
            showIcon
            className="text-sm text-muted-foreground"
          >
            github
          </ExternalLink>
        </div>
      </ContainerWrapper>
    </footer>
  );
}
