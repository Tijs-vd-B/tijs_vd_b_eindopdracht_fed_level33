import React from "react";
import List from "./List";

function ShoppingCart(props) {
  console.log(props);
  return (
    <div className="shoppingcart__item">
      <button onClick={props.handleClickEmptyCart}>Empty Cart</button>
      <List readonly={props.readonly} items={props.items} />
    </div>
  );
}

export default ShoppingCart;
