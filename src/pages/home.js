import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { uniq } from 'lodash';
import { CategoryTabs } from '../components/CategoryTabs';
import styles from './home.css';

const selectBookCategories = createSelector(
  state => state.book.list,
  books => uniq(books.map(book => book.category))
);

export default function() {
  const categories = useSelector(selectBookCategories);
  return (
    <div className={styles.normal}>
      <header>
        <h1>ND Library</h1>
      </header>
      <CategoryTabs categories={categories} />
      <div>
        <li data-testid="book-tag">Java</li>
      </div>
      <div>
        <li data-testid="book-summary">你不知道的 JavaScript</li>
      </div>
    </div>
  );
}
