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
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
    },
    {
      title: 'Bamboo Link',
      name: 'link',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
};
