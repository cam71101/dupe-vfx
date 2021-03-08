require('dotenv').config();

const {
  api: { projectId, dataset },
} = requireConfig('../studio/sanity.json');

module.exports = {
  siteMetadata: {
    title: 'Dupe VFX | The world’s first visual effects B Corporation',
    titleTemplate: '%s · Dupe VFX',
    description:
      "Amazing visual effects for film and television from the world's first VFX B corp. Headquartered in London, Dupe vfx specialises in concept & design, onset supervision, CG,  FX and animation, matte painting, compositing and AR virtual production.",
    url: 'http://dupevfx.com', // No trailing slash allowed!
    siteUrl: 'http://dupevfx.com',
    image: '/images/dupe-vfx-website-logo.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@dupevfx',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: projectId,
        dataset: dataset,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: projectId,
        dataset: dataset,
        defaultImageConfig: {
          quality: 100,
          fit: 'max',
          auto: 'format',
        },
        fragmentName: 'Image',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            },
          },
        ],
      },
    },
    'gatsby-remark-responsive-iframe',
    'gatsby-remark-images',
  ],
};

function requireConfig(path) {
  try {
    return require(path);
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    );
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || '',
      },
    };
  }
}
