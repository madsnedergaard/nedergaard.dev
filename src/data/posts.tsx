//import preval from 'babel-plugin-preval/macro';
import type { PostMeta } from '../types';

const importAll = (r) =>
  r.keys().map((fileName) => ({
    slug: fileName.replace(/(^\.)(.*)(\.mdx?$)/, '$2'),
    module: r(fileName),
  }));

type PostModule = {
  slug: string;
  module: {
    meta: PostMeta;
  };
};
const posts: PostModule[] = importAll(require.context('../pages', true, /.mdx$/));

// const posts: PostMeta[] = preval`
//   module.exports = require('./getPosts');
// `;

export default posts;
