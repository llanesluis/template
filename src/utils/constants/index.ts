import { Route } from "next";

type NavLink = {
  href: Route;
  title: string;
};

export const NAV_LINKS = [
  { href: "/static", title: "Static" },
  { href: "/streaming", title: "Streaming" },
  { href: "/blog", title: "Blog" },
  { href: "/sign-in", title: "Sign In" },
  { href: "/sign-up", title: "Sign Up" },
] satisfies NavLink[];
