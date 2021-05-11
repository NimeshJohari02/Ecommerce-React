import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { SelectCollection } from "../../redux/shop/shop.selectors.js";
import "./collection.styles.scss";
const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div>
      <div className="collection-page">
        <h2>{title}</h2>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: SelectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
