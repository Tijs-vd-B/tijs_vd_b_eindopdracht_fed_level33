import React from "react";

function ListItem(props) {
  // const clickItem = (event) => console.log(event.target);
  // console.log(props.item);
  return (
    <li
      className="list-item"
      key={props.item.id}
      onClick={props.handleClickGroceryItem}
      value={props.item.title}
    >
      {props.item.title}
    </li>
  );
}

export default ListItem;
