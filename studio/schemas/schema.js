import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import about from './about';
import newsPost from './newsPost';
import workPost from './workPost';
import jobPost from './jobPost';
import joinUs from './joinUs';
import home from './home';
import partnerLogo from './partnerLogo';

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    about,
    newsPost,
    workPost,
    jobPost,
    joinUs,
    home,
    partnerLogo,
  ]),
});
