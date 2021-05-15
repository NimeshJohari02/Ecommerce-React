import React from "react";
import { connect } from "react-redux";
import { firestore, convertSnapshotToMap } from "../../firebase/firebase.utils";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { UpdateCollections } from "../../redux/shop/shop.actions";
class Shop extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot((Snapshot) => {
      const collectionMap = convertSnapshotToMap(Snapshot);
      updateCollection(collectionMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverview}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionsMap) =>
    dispatch(UpdateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(Shop);
