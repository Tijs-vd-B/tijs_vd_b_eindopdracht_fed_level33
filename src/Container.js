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
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.handleClickEmptyCart = this.handleClickEmptyCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAddItem = this.handleClickAddItem.bind(this);
  }

  handleClickGroceryItem(event) {
    console.log(event.target.getAttribute("value"));
    console.log(event.target.getAttribute("key"));
    const clickedItem = this.state.groceryItems.find(
      (item) => item.title === event.target.getAttribute("value")
    );
    if (this.state.shoppingListItems.includes(clickedItem)) {
      console.log("Hey , you're already there!");
      this.addAmountToItem(clickedItem);
    } else {
      clickedItem.amount = 1;
      console.log(clickedItem);
      this.setState({
        ...this.state,
        shoppingListItems: [...this.state.shoppingListItems].concat(
          clickedItem
        ),
      });
    }
  }

  addAmountToItem = (clickedItem) => {
    clickedItem.amount++;
    const updatedItem = [clickedItem];
    console.log(updatedItem);
    const updatedShoppingListItems = this.state.shoppingListItems.map(
      (obj) => updatedItem.find((o) => o.id === obj.id) || obj
    );
    this.setState({
      ...this.state,
      shoppingListItems: updatedShoppingListItems,
    });
  };

  handleClickEmptyCart() {
    this.setState({
      ...this.state,
      shoppingListItems: [],
    });
  }

  capitalizeFirstChar = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  handleClickAddItem(event) {
    event.preventDefault();
    if (this.state.newTitle.length > 30) {
      alert(
        `"${this.state.newTitle}" is a bit too long for comfort sry...! I'd keep it under 30 chars..."`
      );
    } else {
      console.log(this.state.newTitle);
      console.log(this.state.groceryItems.length);
      const newItem = {
        id: this.state.groceryItems.length + 1,
        title: this.capitalizeFirstChar(this.state.newTitle),
      };
      this.setState({
        ...this.state,
        groceryItems: [...this.state.groceryItems].concat(newItem),
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container">
        <div className="grocerylist">
          <h1>Grocery List</h1>
          <GroceryList
            items={this.state.groceryItems}
            handleClickGroceryItem={this.handleClickGroceryItem}
            handleChange={this.handleChange}
            handleClickAddItem={this.handleClickAddItem}
          />
        </div>
        <div className="shoppingcart">
          <h1>Shoppping Cart</h1>
          <ShoppingCart
            readonly="true"
            items={this.state.shoppingListItems}
            handleClickGroceryItem={this.handleClickGroceryItem}
            handleClickEmptyCart={this.handleClickEmptyCart}
          />
        </div>
      </div>
    );
  }
}
export default Container;
