import React, { Component } from 'react';
import BaseLayout from './base';

const ULR_NO_LAYOUT = ['/', '/home', '/recommend', '/donate', '/profile'];

class Index extends Component {
  componentDidMount() {}
  renderBody = () => {
    const {
      location: { pathname },
      children,
    } = this.props;
    if (ULR_NO_LAYOUT.includes(pathname)) {
      return <BaseLayout {...this.props} />;
    }
    return <>{children}</>;
  };

  render() {
    return <>{this.renderBody()}</>;
  }
}

export default Index;
