import React from "react";
import "../App.css";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "15px",
          borderRadius: "4px",
          boxShadow: "0 2px 4px 0 hsla(0,0%,50.2%,.4)",
          marginBottom: "10px",
          fontSize: "18px"
        }}
      >
        <div>{this.props.item.description}</div>
        <div
          id="btnRemove"
          onClick={() => {
            this.props.onRemove(this.props.item.id);
          }}
        >
          <i
            className="fa fa-trash-o"
            style={{ fontSize: "24px", color: "#bfbfbf", cursor: "pointer" }}
          ></i>
        </div>
      </div>
    );
  }
}
Item.propTypes = {
  item: PropTypes.object,
  onRemove: PropTypes.func.isRequired
};

export default Item;
