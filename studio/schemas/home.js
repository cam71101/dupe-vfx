import partnerLogo from './partnerLogo';

export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  fields: [
    {
      name: 'dupeLogo',
      title: 'Dupe Logo',
      type: 'image',
    },
    {
      title: 'Main Video Link',
      name: 'mainVideo',
      type: 'string',
    },
    {
      name: 'dupeTagLine',
      type: 'array',
      title: 'Dupe Tag Line',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Bcorp Video Link',
      name: 'bcorpVideo',
      type: 'string',
    },
    {
      name: 'bcorpLogo',
      title: 'Bcorp Logo',
      type: 'image',
    },
    {
      name: 'bcorpText',
      type: 'array',
      title: 'Bcorp Text',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'partnersGallery',
      title: 'Partners gallery',
      type: 'array',
      of: [
        {
          type: 'partnerLogo',
        },
      ],
    },
  ],
};
