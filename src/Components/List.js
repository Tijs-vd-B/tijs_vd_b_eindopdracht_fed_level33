import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const listItems = props.items.map((item) => (
    <ListItem key={item.id} item={item} />
  ));
  return <ul>{listItems}</ul>;
}
export default List;
