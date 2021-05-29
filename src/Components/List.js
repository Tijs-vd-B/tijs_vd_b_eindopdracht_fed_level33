import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
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
    const listItems = this.state.groceryItems.map((item) => (
      <ListItem key={item.id} item={item} />
    ));
    return <ul>{listItems}</ul>;
  }
}
export default List;
