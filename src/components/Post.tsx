import Head from 'next/head';
import { Container } from './Container';
import type { PostMeta } from '../types';
import { Menu } from './Menu';

import { useRouter } from 'next/router';

export const Post: React.FC<{ meta: PostMeta }> = ({ children, meta }) => {
  const {push: routerPush, query: slug } = useRouter();
  return (
  <Container>
    <Head>
      <title>{meta.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Menu selectedTopic={slug} onSelect={(topic) => routerPush(`/?topic=${topic}`)} />
    <article>{children}</article>
  </Container>
)};

export default Post;
