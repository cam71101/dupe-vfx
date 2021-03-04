import image from './objects/image';

export default {
  title: 'Partner Logo',
  name: 'partnerLogo',
  type: 'file',
  fields: [
    {
      title: 'Logo Link',
      name: 'link',
      type: 'string',
    },
    {
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
    },
  ],
};
