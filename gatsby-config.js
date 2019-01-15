module.exports = {
  siteMetadata: {
    title: `The Boxmate`,
    description: `The Boxmate`,
    author: `Rich Matney`
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The-Boxmate`,
        short_name: `Boxmate`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00863F`,
        display: `minimal-ui`,
        icon: `src/images/ias-logo.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"] // Purge only tailwind
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
