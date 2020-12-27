module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'vdu3x0x3',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Source Sans Pro`,
              variants: [`300`, `400`, `500`, `600`, `700`],
            },
            {
              family: `Karla`,
              variants: [`300`, `400`, `500`, `600`, `700`],
            },
            {
              family: `Vollkorn`,
              variants: [`400`],
            },
          ],
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
