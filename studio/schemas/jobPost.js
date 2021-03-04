import image from './objects/image';

export default {
  title: 'Job Post',
  name: 'jobPost',
  type: 'document',
  fields: [
    {
      title: 'Job Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Please provide a title'),
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
      validation: (Rule) => Rule.required().error('Please provide a location'),
    },
    {
      title: 'Bamboo Link',
      name: 'link',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Please provide a Bamboo Link'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Please provide an image'),
    },
  ],
};
