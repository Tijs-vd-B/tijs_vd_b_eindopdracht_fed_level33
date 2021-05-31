import React from "react";
import List from "./List";
import InputField from "./InputField";

function GroceryList(props) {
  console.log(props);
  return (
    <div className="grocerylist__item">
      <InputField
        handleChange={props.handleChange}
        handleClickAddItem={props.handleClickAddItem}
      />
      <List
        items={props.items}
        handleClickGroceryItem={props.handleClickGroceryItem}
      />
    </div>
  );
}

export default GroceryList;
