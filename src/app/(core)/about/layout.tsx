import { SessionProvider } from "@/app/providers";
import { getSession } from "@/lib/session";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // don't await, get the promise instead (still opts out of static rendering the whole tree from here down)
  const sessionPromise = getSession();

  return (
    <div>
      <SessionProvider session={sessionPromise}>{children}</SessionProvider>
    </div>
  );
}
