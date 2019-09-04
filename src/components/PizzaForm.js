import React from "react";

const PizzaForm = props => {
  let notVegetarian = false;
  let vegetarian = true;
  if (props.options.vegetarian === false) {
    vegetarian = false;
    notVegetarian = true;
  }
  let place = "Pizza Topping";
  let val = "";
  if (props.options.topping !== "") {
    place = props.options.topping;
    val = props.options.topping;
  }
  let size = "";
  if (props.options.size !== "") {
    size = props.options.size;
  }
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder={place}
          value={val}
          onChange={event => props.handleToppingsChange(event)}
        />
      </div>
      <div className="col">
        <select
          value={size}
          id="size"
          onChange={event => props.handleSelect(event)}
          className="form-control"
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            id="notVegetarian"
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            checked={vegetarian}
            onChange={event => props.handleChange(event)}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            checked={notVegetarian}
            onChange={event => props.handleChange(event)}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={() => props.handleSubmit(props.options)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
