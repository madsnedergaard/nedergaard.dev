export type PostMeta = {
  title: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
  stage: 'sprout' | 'seedling' | 'evergreen';
  topics: string[];
  // tags/topics
};
