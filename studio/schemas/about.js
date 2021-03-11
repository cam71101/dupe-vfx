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
      title: 'Second Title',
      name: 'secondTitle',
      type: 'string',
    },
    {
      name: 'bgImageOne',
      title: 'Background Image One',
      type: 'image',
    },
    {
      name: 'bgImageTwo',
      title: 'Background Image Two',
      type: 'image',
    },
    {
      name: 'bgImageThree',
      title: 'Background Image Three',
      type: 'image',
    },
    {
      name: 'bCorpLogo',
      title: 'B Corp Logo',
      type: 'image',
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
