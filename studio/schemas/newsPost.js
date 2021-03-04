import image from './objects/image';

export default {
  title: 'News Post',
  name: 'newsPost',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Please provide a title'),
    },
    {
      title: 'Subheading',
      name: 'subheading',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Please provide a subheading'),
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      validation: (Rule) => Rule.required().error('Please provide a image'),
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
      validation: (Rule) => Rule.required().error('Please provide text'),
    },
  ],
};
