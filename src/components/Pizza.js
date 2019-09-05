import React from "react"

const Pizza = (props) => {
  const {topping,size,vegetarian} = props.pizza
  return(
    <tr>
      <td>{topping }</td>
      <td>{size}</td>
      <td>{vegetarian ? 'yes' : 'no'}</td>
      <td><button onClick={(e) => props.editPizza(e, props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
