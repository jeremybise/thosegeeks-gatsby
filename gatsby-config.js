module.exports = {
  siteMetadata: {
    title: `ThoseGeeks Web Design & Development`,
    description: `Based in Virginia, ThoseGeeks designs, builds and hosts quality, hand-crafted, performant websites.`,
    author: `@thosegeeks`,
    siteUrl: `https://thosegeeks.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/content/made`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact`,
        path: `${__dirname}/src/content/contact`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/content/docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `is`,
        path: `${__dirname}/src/content/is`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `does`,
        path: `${__dirname}/src/content/does`,
      },
    },
    `gatsby-remark-source-name`,
    {
      resolve: `gatsby-plugin-emotion`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              showCaptions: true,
              wrapperStyle: "margin: 3rem 0;",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ThoseGeeks`,
        short_name: `ThoseGeeks`,
        start_url: `/`,
        background_color: `#1a202c`,
        theme_color: `#1a202c`,
        display: `minimal-ui`,
        icon: `src/images/thosegeeks-icon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
