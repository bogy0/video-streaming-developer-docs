module.exports = {
  pathPrefix: `/video-streaming-developer-docs`,
  siteMetadata: {
    title: 'IBM Video Streaming Developers',
    description:
      'Customize and control the viewing experience for your audience or create your own streaming applications, analyze engagement and telemetry data with the APIs and SDKs of the IBM Video Streaming platform.',
    keywords: 'gatsby,video,video streaming,developer,developers,sdk,api,player,ios,android,broadcast',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/channel-api-getting-started',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl: 'https://github.com/bogy0/video-streaming-developer-docs',
          subDirectory: '',
          branch: 'master',
        },
      },
    },
  ],
};
