import BackgroundEffect from "@/components/background-effect";
import { ContainerWrapper } from "@/components/wrappers";

export default function Loading() {
  return (
    <ContainerWrapper className="bg-muted relative grid h-full animate-pulse place-items-center text-center">
      <BackgroundEffect />
      Loading...
    </ContainerWrapper>
  );
}
