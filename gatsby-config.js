module.exports = {
  siteMetadata: {
    siteUrl: "https://mluo24.github.io/",
    title: "Miranda Luo's Personal Website",
  },
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-mui-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-SFGDK8KTE9"],
      },
      pluginConfig: {
        head: true,
      },
    },
  ],
}
