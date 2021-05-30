import React, { Component } from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Melk" },
        { id: 2, title: "Brood" },
        { id: 3, title: "Eieren" },
        { id: 4, title: "Tomaten-ketchup" },
        { id: 5, title: "Mosterd" },
        { id: 6, title: "Vla" },
        { id: 7, title: "Chips" },
      ],
      shoppingListItems: [],
    };
  }
  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <GroceryList items={this.state.groceryItems} />
        <hr />
        <h1>In Shoppping Cart</h1>
        <ShoppingCart items={this.state.shoppingListItems} />
      </div>
    );
  }
}
export default Container;
