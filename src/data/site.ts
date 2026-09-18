export type SiteSocialLink = {
  href: string;
  ariaLabel: string;
  icon: string;
};

export type SiteLinkCard = {
  href: string;
  title: string;
  subtitle: string;
  icon: string;
  trailingIcon: string;
  style: string;
};

export const site = {
  seo: {
    title: 'Shiny Snail',
    ogTitle: 'Shiny Snail',
    twitterTitle: 'Shiny Snail',
    description:
      'Shiny Snail is a family oriented, video game and product development studio based in Vermont.',
    url: 'https://shinysnail.com',
    image: 'https://shinysnail.com/avatar.png',
    siteName: 'Shiny Snail',
    locale: 'en_US',
    twitterSite: '@shinysnailLLC',
    twitterCreator: '@shinysnailLLC',
  },

  featuredLink: {
    href: 'https://shinysnail.itch.io/',
    title: 'Itch.io Games',
    subtitle: 'Check out our latest games on Itch.io',
  },

  profile: {
    avatarSrc: '/logo.png',
    name: 'Shiny Snail',
    handle: '@shinysnailLLC',
    bio: 'Shiny Snail is a family oriented, video game and product development studio based in Vermont. The company started out as Ketos Games, established in 2014 by Curtis Aube. In 2015 they released Marble Muse, a game about navigating a marble through a 3D obstacle course by rotating the course itself. Since the release of Marble Muse, they have made a number of games including a collaboration with Whooplah on Pollywog Pond, an educational video game portal for preschoolers.',
  },

  socialLinks: [
    {
      href: 'https://shinysnail.itch.io/',
      ariaLabel: 'Itch.io',
      icon: 'itchio',
    },
    {
      href: 'https://x.com/ShinySnailLLC',
      ariaLabel: 'Twitter',
      icon: 'twitter',
    },
    {
      href: 'https://www.instagram.com/shinysnailllc/',
      ariaLabel: 'Instagram',
      icon: 'instagram',
    },
    {
      href: 'https://www.youtube.com/channel/UC7wnoxde5ONSlC9rgN1sPMw',
      ariaLabel: 'YouTube',
      icon: 'youtube',
    },
  ] satisfies SiteSocialLink[],

  linkCards: [
  ] satisfies SiteLinkCard[],
} as const;
