import * as PropTypes from 'prop-types';
import React from 'react';

export function BookSummary(props) {
  return (
    <div className="itemBlock" onClick={props.onClick}>
      <div className="product_img">
        <img className="img" src={require('../assets/5a28b40bc60057c40a000005.png')} alt="book" />
      </div>
      <span className="text_ellipsis">{props.val.productName}</span>
      <div className="priceBox">
        最高回收价 <span className="price">¥{props.val.topPrice}</span>
      </div>
      <div data-testid="book-summary">你不知道的JavaScript</div>
      <div className="btn">立即回收</div>
    </div>
  );
}

BookSummary.propTypes = {
  onClick: PropTypes.func,
  val: PropTypes.any,
};
