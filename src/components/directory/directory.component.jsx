import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { selectDirectorySelection } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelection,
});
export default connect(mapStateToProps)(Directory);
