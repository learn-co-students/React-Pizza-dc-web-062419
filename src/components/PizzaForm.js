import React from 'react';

const PizzaForm = ({ onEditPizza, onFormChange, selectedPizza: pizza }) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          name="topping"
          value={pizza.topping}
          onChange={onFormChange}
        />
      </div>
      <div className="col">
        <select value={pizza.size} name="size" onChange={onFormChange} className="form-control">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <label htmlFor="vegetarian">Vegetarian: </label>
        <input
          type="checkbox"
          name="vegetarian"
          checked={pizza.vegetarian}
          onChange={onFormChange}
        />
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={onEditPizza}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
