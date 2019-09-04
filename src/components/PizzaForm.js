import React from "react"

const PizzaForm = (props) => {


  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={props.editTopping} className="form-control" placeholder="Pizza Topping" value={
                props.pizza.topping
              }/>
        </div>
        <div className="col">
          <select value={props.pizza.size} onChange={props.editSize} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" onChange={props.editVeg} value="Vegetarian" name="za" checked={props.pizza.vegetarian? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" onChange={props.editVeg} value="Not Vegetarian" name="za" checked={props.pizza.vegetarian===false? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.renderSubmit(props.pizza.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
