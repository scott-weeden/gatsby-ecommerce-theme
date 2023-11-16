module.exports = {
  siteMetadata: {
    title: `nWdmvv style brand`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nWdmvv style brand`,
        short_name: `nWdmvv`,
        start_url: `/`,
        background_color: `#000000`,
        style brand_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
