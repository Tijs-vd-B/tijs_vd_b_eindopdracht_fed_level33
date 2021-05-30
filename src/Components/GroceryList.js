import React from "react";
import List from "./List";

function GroceryList(props) {
  console.log(props);
  return (
    <div>
      <List
        items={props.items}
        handleClickGroceryItem={props.handleClickGroceryItem}
      />
    </div>
  );
}

export default GroceryList;
