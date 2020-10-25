import * as React from 'react';
import styled from 'styled-components';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '../components';
import posts from '../data/posts';

import { Layout } from '../components/Layout';
import { Menu } from '../components/Menu';
import { CurrentlyReading } from '../components/CurrentlyReading';

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Col = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2``;

const Reading = () => {
  return (
    <Layout title="Reading 📚">
      <Row>
        <Col>
          <Title>Left</Title>
          <p>
            Risus nisi feugiat tristique himenaeos conubia sed natoque libero pretium platea quisque
            viverra ridiculus facilisi metus consectetur consequat hendrerit, euismod eros dolor
            quam sociis dictumst iaculis mauris ornare neque vel turpis eu congue integer aenean.
          </p>
        </Col>
        <Col>
          <Title>Currently reading</Title>
          <CurrentlyReading />
        </Col>
      </Row>
    </Layout>
  );
};

export default Reading;
