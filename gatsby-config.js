import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `story`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'G6kNqlA6sXFfucDG3d5mrQtt',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        localAssets: true, // Optional parameter to download the images to use with Gatsby Image Plugin
      }
    }
  ],
}

export default config
