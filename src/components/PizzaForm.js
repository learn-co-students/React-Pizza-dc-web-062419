import React from "react";




const PizzaForm = (props) => {
  const {topping, size, vegetarian} = props.pizzaToEdit
  return (
        <form onChange={(event) => props.editedPizza(event, props.pizza)} onSubmit={(event) => props.updatePizza(event, props.pizzaToEdit)}>
    <div className="form-row">
      <div className="col-5">
        <input
          name="topping" 
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={
           topping
          }
        />
      </div>
      <div className="col">
        <select value={size} className="form-control" name="size" >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            name="vegetarian"
            className="form-check-input"
            type="radio"
            value= {true}
            checked={vegetarian ? true : false}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            name="vegetarian"
            className="form-check-input"
            type="radio"
            value= {false}
            checked={vegetarian ? false : true }
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" >
          Submit
        </button>
      </div>
    </div>
      </form>
  );
};

export default PizzaForm;
