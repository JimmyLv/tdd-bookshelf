import { Tabs } from 'antd-mobile';
import { useDispatch } from 'react-redux';

export function CategoryTabs({ categories = [] }) {
  const dispatch = useDispatch();
  return (
    <Tabs
      tabs={categories.map(i => ({ title: i }))}
      onTabClick={tab =>
        dispatch({
          type: 'book/fetch',
          payload: {
            category: tab.title,
          },
        })
      }
    >
      {tab => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
            backgroundColor: '#fff',
          }}
        >
          <p>Content of {tab.title}</p>
        </div>
      )}
    </Tabs>
  );
}
