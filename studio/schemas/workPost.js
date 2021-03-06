import image from './objects/image';

export default {
  title: 'Work Post',
  name: 'workPost',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Please provide a title'),
    },
    {
      title: 'Sub Title',
      name: 'subtitle',
      type: 'string',
      validation: (Rule) => Rule.required().error('Please provide a subtitle'),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      description: 'only letters and hyphens please eg "gangs-of-london"',
      validation: (Rule) =>
        Rule.required().error('Please supply a slug (click generate)'),
    },
    {
      title: 'Published date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      title: 'Featured?',
      name: 'featured',
      type: 'boolean',
      description: 'Will be featured on the homepage',
    },
    {
      title: 'Show Reel Link',
      name: 'showReel',
      type: 'string',
    },
    {
      title: 'Trailer Link',
      name: 'trailer',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error('Please upload a header image'),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: 'If image not supplied, header image will be used instead.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'credits',
      type: 'array',
      title: 'Credits',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};
