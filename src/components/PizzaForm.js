import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" 
              className="form-control" 
              placeholder='Pizza topping'
              name = 'topping'
              value = { 
                props.pizzaToEdit.topping
              }
              onChange={props.handlePizzaChange}
              />
        </div>
        <div className="col">
          <select value = {    props.pizzaToEdit.size   } 
            className="form-control"
            name='size'
            onChange={props.handlePizzaChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
           <input className="form-check-input" 
              type="radio" 
              value={true}
              name='vegetarian'
              checked={  props.pizzaToEdit.vegetarian ? true : false }
              onChange={props.handleVegetarianChange}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" 
              type="radio" 
              value={false}
              name='vegetarian'
              checked={ props.pizzaToEdit.vegetarian ? false : true }
              
              onChange={props.handleVegetarianChange}
              />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" 
            className="btn btn-success" 
            onClick={(event)=>props.handleSubmit(event, props.pizzaToEdit)}
          >
              Submit
          </button>
        </div>
      </div>

  )
}

export default PizzaForm
