import React from "react"

const Pizza = ({pizza: {id, topping, size, vegetarian}, onEdit}) => {
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "vegetarian" : "Not Vegetarian"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => onEdit(id, topping, size, vegetarian)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
