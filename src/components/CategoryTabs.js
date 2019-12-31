import { Tabs } from 'antd-mobile';
import { useDispatch } from 'react-redux';

export function CategoryTabs({ categories = [], children }) {
  const dispatch = useDispatch();
  return (
    <Tabs
      tabs={categories}
      renderTab={tab => <span>{tab}</span>}
      onTabClick={tab =>
        dispatch({
          type: 'book/fetch',
          payload: {
            category: tab,
          },
        })
      }
    >
      {children}
    </Tabs>
  );
}
