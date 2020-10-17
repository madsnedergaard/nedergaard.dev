//import type { PostMeta } from '../types';
// TODO: Kill this file

const fs = require('fs');
const path = require('path');

const META_REGEX = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
const DIR = path.join(process.cwd(), '../pages/content/');

const files = fs.readdirSync(DIR).filter((file) => file.endsWith('.mdx'));

const allPosts = files
  .map((file) => {
    const name = path.join(DIR, file);
    const contents = fs.readFileSync(name, 'utf8');
    const match = META_REGEX.exec(contents);
    if (!match || typeof match[1] !== 'string')
      throw new Error(`${name} needs to export const meta = {}`);

    const meta = eval('(' + match[1] + ')');

    return {
      ...meta,
      path: '/content/' + file.replace(/\.mdx?$/, ''),
    };
  })
  .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

module.exports = allPosts || [];
