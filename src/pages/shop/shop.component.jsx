import React from "react";
import SHOP_DATA from "./ShopData.js";
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
}

export default Shop;
