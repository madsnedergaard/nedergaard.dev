import * as React from 'react';
import posts from '../data/posts';
import { uniq, flatten } from '../utils';

export const Menu: React.FC<any> = ({ selectedTopic, onSelect }) => {
  const topics = uniq(flatten(posts.map((post) => post.module.meta.topics)));

  return (
    <div>
      <ul>
        {topics.map((t) => (
          <button
            onClick={() => onSelect(t)}
            key={t}
            style={{ marginRight: 6, fontWeight: t === selectedTopic ? 'bold' : 'normal' }}
          >
            {t}
          </button>
        ))}
      </ul>
    </div>
  );
};
