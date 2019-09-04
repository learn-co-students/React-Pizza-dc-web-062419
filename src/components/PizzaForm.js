import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={props.handleChange} type="text" name='topping' className="form-control" placeholder="Pizza Topping" value={props.Pizza.topping} />
        </div>
        <div className="col">
          <select  onChange={props.handleChange} value={props.Pizza.size} name='size' className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={props.handleChange} name='veggie' type="radio" value="Vegetarian" checked={props.checkVeggie === 'Vegetarian'}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={props.handleChange} name='veggie' type="radio" value="Not Vegetarian" checked={props.checkVeggie === 'Not Vegetarian'}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
