/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Self Host Lab',
  author: 'Karan Jadhav',
  headerTitle: 'Self Host Lab',
  description: 'A blog about self hosting and privacy',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://selfhostlab.dev',
  siteRepo: 'https://github.com/selfhostlab/selfhostlab.dev',
  siteLogo: '/static/images/Self Host Lab.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'selfhostlab@jadhav.dev',
  github: 'https://github.com/selfhostlab',
  twitter: 'https://twitter.com/iamkaranjadhav',
  linkedin: 'https://www.linkedin.com/in/jadhav-karan/',
  locale: 'en-US',
  // comments: {
  //   // If you want to use an analytics provider you have to add it to the
  //   // content security policy in the `next.config.js` file.
  //   // Select a provider and use the environment variables associated to it
  //   // https://vercel.com/docs/environment-variables
  //   // provider: 'giscus', // supported providers: giscus, utterances, disqus,
  //   // utterancesConfig: {
  //   //   repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
  //   //   issueTerm: 'pathname',
  //   //   label: 'blog',
  //   //   theme: 'github-light',
  //   //   darkTheme: 'dark-blue',
  //   // },
  //   // giscusConfig: {
  //   //   // Visit the link below, and follow the steps in the 'configuration' section
  //   //   // https://giscus.app/
  //   //   repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  //   //   repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
  //   //   category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  //   //   categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  //   //   mapping: 'pathname', // supported options: pathname, url, title
  //   //   reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
  //   //   // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
  //   //   metadata: '0',
  //   //   // theme example: light, dark, dark_dimmed, dark_high_contrast
  //   //   // transparent_dark, preferred_color_scheme, custom
  //   //   theme: 'light',
  //   //   // theme when dark mode
  //   //   darkTheme: 'transparent_dark',
  //   //   // If the theme option above is set to 'custom`
  //   //   // please provide a link below to your custom theme css file.
  //   //   // example: https://giscus.app/themes/custom_example.css
  //   //   themeURL: '',
  //   //   // This corresponds to the `data-lang="en"` in giscus's configurations
  //   //   lang: 'en',
  //   // },
  // },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
