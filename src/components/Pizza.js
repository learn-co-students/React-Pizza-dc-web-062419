import React from "react";
// import { prependOnceListener } from "cluster";

const Pizza = props => {
  // console.log(props.pizza);
  let pizza = props.pizza;
  return (
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian.toString()}</td>
      <td>
        <button
          id={pizza.id}
          type="button"
          className="btn btn-primary"
          onClick={e => {
            props.onEditPizza(e);
          }}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
