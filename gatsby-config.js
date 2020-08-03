module.exports = {
  siteMetadata: {
    title: 'Gatsby Casper',
    description: 'A port of the casper blog built for gatsby',
    siteUrl: 'https://gatsby-casper.netlify.com', // full path to blog - no ending slash
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data',
      },
    },
  ],
};
