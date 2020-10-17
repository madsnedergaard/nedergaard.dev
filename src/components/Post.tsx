import Head from 'next/head';
import { Container } from './Container';

type Meta = {
  title: string;
  description: string;
  date: string; // replace with date?
  // TODO: Add more
};
export const Post: React.FC<{ meta: Meta }> = ({ children, meta }) => (
  <Container>
    <Head>
      <title>{meta.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <article>{children}</article>
  </Container>
);

export default Post;
