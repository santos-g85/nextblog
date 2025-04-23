export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME ,
  description:process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ,
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  // links: {
  //   twitter: "https://twitter.com/shadcn",
  //   github: "https://github.com/shadcn/ui",
  //   docs: "https://ui.shadcn.com",
  // },
}
