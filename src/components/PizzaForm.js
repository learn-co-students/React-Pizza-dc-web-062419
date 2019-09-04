import React from "react";

const PizzaForm = props => {
  let pizza = props.pizza;
  console.log(props);
  return (
    <form>
      <div className="form-row">
        <div className="col-5">
          <input
            name="topping"
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            onChange={props.edit}
            value={props.pizza.topping}
          />
        </div>
        <div className="col">
          <select
            value={props.pizza.size}
            className="form-control"
            name="size"
            onChange={props.edit}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              name="veg"
              className="form-check-input"
              type="radio"
              value="Vegetarian"
              onChange={props.edit}
              checked={props.pizza.vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              name="notVeg"
              className="form-check-input"
              type="radio"
              value="Not Vegetarian"
              onChange={props.edit}
              checked={!props.pizza.vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={e => props.persist(e, pizza)}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default PizzaForm;
