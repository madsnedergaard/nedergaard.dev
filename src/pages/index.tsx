import * as React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '../components';
import posts from '../data/posts';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

const PostList = ({ posts, selectedTopic }) => {
  const filteredPosts = posts.filter((post) => post.module.meta.topics.includes(selectedTopic));
  return (
    <ul>
      {filteredPosts.map(({ slug, module }) => (
        <li key={slug}>
          <Link href={slug}>{module.meta.title}</Link>
        </li>
      ))}
    </ul>
  );
};

const Home = () => {
  const {query: {topic} } = useRouter();
  const [selectedTopic, setSelectedTopic] = React.useState(topic);
  return (
    <Container>
      <Head>
        <title>Mads Nedergaard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Something about me */}
      {/* Intro to this thing */}
      <h2>Menu</h2>
      <Menu selectedTopic={selectedTopic} onSelect={setSelectedTopic} />
      <PostList posts={posts} selectedTopic={selectedTopic} />
    </Container>
  );
};

export default Home;
