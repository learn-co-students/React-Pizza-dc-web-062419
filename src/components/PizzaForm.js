import React from "react";

const PizzaForm = props => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={
            //Pizza Topping Should Go Here
            props.selection.topping
          }
          onChange={props.editTopping}
        />
      </div>
      <div className="col">
        <select
          value={props.selection.size}
          className="form-control"
          onChange={props.editSize}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={true}
            checked={props.selection.vegetarian ? true : false}
            onChange={props.editVeg}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={false}
            name="za"
            checked={props.selection.vegetarian === false ? true : false}
            onChange={props.editVeg}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={() => props.onFormSubmit(props.selection.id)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
