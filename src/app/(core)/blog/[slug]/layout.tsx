import { ContainerWrapper } from "@/components/wrappers";
import { ReactNode } from "react";

interface CoreLayoutProps {
  children: ReactNode;
}

export default function CoreLayout({ children }: CoreLayoutProps) {
  return (
    <div>
      <aside className="border-b">
        <ContainerWrapper>
          <ul className="text-muted-foreground py-1">
            Fake breadcrumbs {">"} Blog {">"} Title
          </ul>
        </ContainerWrapper>
      </aside>

      {children}
    </div>
  );
}
