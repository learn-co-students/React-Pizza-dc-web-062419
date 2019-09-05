import React from "react";
import Pizza from "../components/Pizza";
const PizzaList = props => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {//render Pizza here
        props.pizzas.map(pizza => {
          return (
            <Pizza
              pizza={pizza}
              key={pizza.id}
              onEditPizza={props.onEditPizza}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default PizzaList;
