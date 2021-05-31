import React from "react";

function InputField(props) {
  return (
    <form className="grocery-form">
      <input
        type="text"
        // value={this.state.firstName}
        name="newTitle"
        placeholder="New groceries"
        onChange={props.handleChange}
      />
      <button onClick={props.handleClickAddItem}>Add</button>
    </form>
  );
}

export default InputField;
