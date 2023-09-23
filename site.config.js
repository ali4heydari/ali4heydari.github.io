/**
 * @type {{GITLAB_ID: string, TWITTER_ID: string, CONTACT_GET_FORM_ID: string, DISCUSS_SHORTNAME: string, SITE_TITLE: string, STEAM_ID: string, CALENDLY_EVENT_LINK: string, BIRTHDATE: Date, CALENDLY_ID: string, CONTACT_PHONE: string, SITE_DESCRIPTION: string, TWITCH_ID: string, SHORT_NAME: string, INSTAGRAM_ID: string, SITE_AUTHOR: string, SPOTIFY_ID: string, GITHUB_ID: string, STACK_OVER_FLOW_ID: string, DISCORD_SERVER_ID: string, LINKEDIN_ID: string, SKYPE_INVITE_ID: string, SLIDES_ID: string, CONTACT_EMAIL: string, FACEBOOK_ID: string, NODE_ENV: string}}
 */
const siteConfig = {
  FACEBOOK_ID: "",
  TWITTER_ID: "",
  INSTAGRAM_ID: "",
  SPOTIFY_ID: "ali4heydari",
  STEAM_ID: "ali4heydari",
  LINKEDIN_ID: "ali4heydari",
  TWITCH_ID: "ali4heydari",
  BIRTHDATE: new Date(1997, 0, 30),
  CALENDLY_EVENT_LINK: "30min",
  CALENDLY_ID: "ali4heydari",
  CONTACT_EMAIL: "ali4heydari+githubio@gmail.com",
  CONTACT_PHONE: "",
  SHORT_NAME: "Ali Heydari's personal website",
  SITE_TITLE: "Ali Heydari",
  SITE_DESCRIPTION: "Ali Heydari's personal website",
  SITE_AUTHOR: "Ali Heydari",
  GITHUB_ID: "ali4heydari",
  GITLAB_ID: "ali4heydari",
  STACK_OVER_FLOW_ID: "8777320/ali4heydari",
  SKYPE_INVITE_ID: "lo1ReeemgPvq",
  SLIDES_ID: "ali4heydari",
  CONTACT_GET_FORM_ID: "b721c787-7978-40ec-9253-5fefaaa6d1e0",
  DISCORD_SERVER_ID: "7Z4Wk2zUuj",
  DISCUSS_SHORTNAME: process.env.NEXT_PUBLIC_DISCUSS_SHORTNAME,
  NODE_ENV: process.env.NODE_ENV,
  RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  HOTJAR_SNIPPET_VERSION: process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION,
  HOTJAR_ID: process.env.NEXT_PUBLIC_HOTJAR_ID,
};

export default siteConfig;
