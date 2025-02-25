import { cookies } from "next/headers";

export async function getSession() {
  // Next.js opts you out of static rendering since cookies is a dynamic API and
  // using it in a layout or page will opt a route into dynamic rendering.
  // nextjs.org/docs/app/api-reference/functions/cookies#good-to-know
  // comment the next line to generate static pages, even if you don't make use of cookies
  cookies();

  await new Promise((r) => setTimeout(r, 2000));

  return { userId: crypto.randomUUID() };
}
