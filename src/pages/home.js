import { uniq } from 'lodash';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { BookList } from '../components/BookList';
import { CategoryTabs } from '../components/CategoryTabs';
import { Header } from '../components/Header';
import { TagList } from '../components/TagList';
import { getBookList } from '../models/book';
import styles from './home.css';

const selectBookCategories = createSelector(getBookList, books =>
  uniq(books.map(book => book.category))
);

export default function() {
  const categories = useSelector(selectBookCategories);
  return (
    <div className={styles.normal}>
      <Header />
      <CategoryTabs categories={categories}>
        {tab => (
          <div>
            <TagList category={tab} />
            <BookList key={tab} category={tab} />
          </div>
        )}
      </CategoryTabs>
    </div>
  );
}
