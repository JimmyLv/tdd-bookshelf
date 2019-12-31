import { countBy, flatten, map } from 'lodash';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import Link from 'umi/link';

import { getBookList } from '../models/book';

const getBookTagsByCategory = createSelector(
  getBookList,
  (_, category) => category,
  (books, category) => books.filter(book => book.category === category).map(book => book.tags)
);

export function TagList({ category }) {
  const tags = useSelector(state => getBookTagsByCategory(state, category));
  const tagsWithCount = countBy(flatten(tags));

  return (
    <div>
      {map(tagsWithCount, (count, tag) => (
        <StyledTag key={tag}>
          <Link to={`/tags/${tag}`}>{tag}</Link> {count}本
        </StyledTag>
      ))}
    </div>
  );
}

const StyledTag = styled.span`
  padding: 10px 4px;
  margin: 4px 10px;
  background-color: white;
  border-radius: 4px;
`;
