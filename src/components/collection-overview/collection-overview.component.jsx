import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);
