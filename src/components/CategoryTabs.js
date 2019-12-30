import { useDispatch } from 'react-redux';

export function CategoryTabs({ categories = [] }) {
  const dispatch = useDispatch();
  return (
    <ul>
      {categories.map(category => (
        <li
          data-testid="category-tab"
          key={category}
          onClick={() =>
            dispatch({
              type: 'book/fetch',
              payload: {
                category,
              },
            })
          }
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
