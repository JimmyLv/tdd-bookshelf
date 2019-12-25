import { SearchBar } from 'antd-mobile';
import { connect } from 'dva';
import React from 'react';
import router from 'umi/router';
import './index.less';

const mapStateToProps = ({ home }) => ({ home });

function Home({ home }) {
  return (
    <div className="homePage">
      <div className="homePage_search">
        <div className="homePage_input">
          <SearchBar placeholder="搜索你想要的商品" onFocus={() => router.push('/recommend')} />
        </div>
        <div className="homePage_search_ico" onClick={() => router.push('/donate')}>
          <img src={require('../../assets/icon-classify.png')} alt="search" />
        </div>
      </div>
      <div>我是一个首页</div>
      <div>{JSON.stringify(home)}</div>
    </div>
  );
}

export default connect(mapStateToProps)(Home);
