import Head from 'next/head';
import Link from 'next/link';
import { Container } from '../components';
import posts from '../data/posts';

const Home = () => (
  <Container>
    <Head>
      <title>Mads Nedergaard</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* Something about me */}

    {/* Intro to this thing */}

    <h2>Thoughts</h2>
    <ul>
      {posts.map(({ slug, module }) => (
        <li key={slug}>
          {console.log(module)}
          <Link href={slug}>{module.meta.title}</Link>
        </li>
      ))}
    </ul>
  </Container>
);

export default Home;
