//import preval from 'babel-plugin-preval/macro';
import type { PostMeta } from '../types';

const importAll = (r) => {
  return r.keys().map((fileName) => ({
    // Converts file to actual slug.
    // ./title.mdx => /title
    // ./about/index.mdx => /about
    slug: fileName.replace(/^\.|(\/index)|\.mdx/g, () => ''),
    module: r(fileName),
  }));
};

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
