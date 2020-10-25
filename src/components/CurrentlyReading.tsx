import * as React from 'react';
import Head from 'next/head';
import * as xml2js from 'xml2js';
import styled from 'styled-components';

const fetchBooks = (callback) => {
  const url =
    'https://www.goodreads.com/review/list/16531967?format=xml&key=b72XwgpC0StIwQ5Y1NGvCg&v=2&shelf=currently-reading&per_page=4&page=1';
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  fetch(proxy + url, {
    headers: {
      'X-Requested-With': 'fetch',
    },
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (xml) {
      return xml2js.parseStringPromise(xml, {
        explicitArray: false,
      });
    })
    .then(function (data) {
      console.log(data);
      callback(data.GoodreadsResponse.reviews.review);
    })
    .catch(function (ex) {
      console.log('parsing failed', ex);
    });
};

const Book = styled.div`
  margin: 0 5px;
`;

export const CurrentlyReading: React.FC = () => {
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    fetchBooks(setBooks);
  }, []);

  if (books.length <= 0) {
    return null;
  }

  return (
    <div style={{ display: 'flex' }}>
      {books.map((b: any) => (
        <Book key={b.id}>
          <a href={b.book.link}>
            <img src={b.book.image_url} alt={b.book.title} />
          </a>
        </Book>
      ))}
    </div>
  );
};
