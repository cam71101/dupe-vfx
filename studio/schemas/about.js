export default {
  title: 'About',
  name: 'about',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'desc',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};
