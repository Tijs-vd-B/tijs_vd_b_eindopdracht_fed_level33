import React from "react";

function ListItem(props) {
  return (
    <li
      className="list-item"
      key={props.item.id}
      onClick={props.handleClickGroceryItem}
      value={props.item.title}
    >
      {props.item.title}
      {props.readonly ? (
        <span className="amount-item"> : {props.item.amount}</span>
      ) : (
        ""
      )}
    </li>
  );
}

export default ListItem;
