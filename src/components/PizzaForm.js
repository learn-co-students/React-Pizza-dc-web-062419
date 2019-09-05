import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name='topping' placeholder="Pizza Topping"  value={
                props.pizzaEdit.topping} onChange={props.handleChange}
            />
        </div>
        <div className="col">
          <select value={props.pizzaEdit.size} name='size' onChange={props.handleChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={props.handleChangeVegetarian} name='vegetarian' type="radio" value={true} checked={true}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={props.handleChangeVegetarian} name='vegetarian' type="radio" value={false} checked={ true} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) =>props.addPizza(e, props.pizzaEdit)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
