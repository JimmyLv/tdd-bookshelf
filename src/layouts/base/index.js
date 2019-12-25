import React from 'react';
import { TabBar } from 'antd-mobile';
import router from 'umi/router';
import 'antd-mobile/dist/antd-mobile.css';
import styles from './index.less';

const TabBarData = [
  {
    id: 'home',
    name: '书架',
    icon: require('../../assets/recycleH5_07.png'),
    selectedIcon: require('../../assets/recycleH5_02.png'),
    url: '/home',
  },
  {
    id: 'recommend',
    name: '推荐',
    icon: require('../../assets/recycleH5_03.png'),
    selectedIcon: require('../../assets/recycleH5_06.png'),
    url: '/recommend',
  },
  {
    id: 'donate',
    name: '捐赠',
    icon: require('../../assets/recycleH5_19.png'),
    selectedIcon: require('../../assets/recycleH5_19.png'),
    url: '/donate',
  },
  {
    id: 'profile',
    name: '我的',
    icon: require('../../assets/recycleH5_04.png'),
    selectedIcon: require('../../assets/recycleH5_05.png'),
    url: '/profile',
  },
];

class BaseLayout extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <TabBar
          unselectedTintColor="#333"
          tintColor="#ef5f55"
          barTintColor="white"
          tabBarPosition="bottom"
        >
          {TabBarData.map(t => {
            const isSelect = this.isTabBarSelect(t.url);
            return (
              <TabBar.Item
                title={t.name}
                key={t.id}
                icon={this.renderIcon(t.icon)}
                selectedIcon={this.renderIcon(t.selectedIcon)}
                // badge={1}
                onPress={() => router.push(t.url)}
                selected={isSelect}
                data-seed="logId"
              >
                {isSelect && this.props.children}
              </TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    );
  }
  isTabBarSelect = url => {
    const {
      location: { pathname },
    } = this.props;
    if (pathname === '/' && url === '/home') {
      return true;
    } else {
      return pathname === url;
    }
  };

  renderIcon = icon => (
    <div
      style={{
        width: '22px',
        height: '22px',
        background: `url(${icon}) center center /  21px 21px no-repeat`,
      }}
    />
  );
}

export default BaseLayout;
