import Head from 'next/head';
import { Container } from './Container';
import type { PostMeta } from '../types';

export const Post: React.FC<{ meta: PostMeta }> = ({ children, meta }) => (
  <Container>
    <Head>
      <title>{meta.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <article>{children}</article>
  </Container>
);

export default Post;
