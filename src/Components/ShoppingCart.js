import React from "react";
import List from "./List";

function ShoppingCart(props) {
  console.log(props);
  return (
    <div>
      <List items={props.items} />
    </div>
  );
}

export default ShoppingCart;
