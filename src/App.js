import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

const URL = 'http://localhost:3000/pizzas/'

class App extends Component {
  
  state = {
    allPizzas: [],
    editedPizza: {
      id: null,
      topping: "", 
      size: "", 
      vegetarian: null
    }

  }
  
  
  
  componentDidMount = () =>{
    fetch(URL)
    .then(res => res.json())
    .then(allPizzas => {this.setState({allPizzas})})
  }
  
  pizzaToEdit = (pizza) => {
    
    this.setState({
      editedPizza: {
          id: pizza.id,
          topping: pizza.topping, 
          size: pizza.size, 
          vegetarian: pizza.vegetarian
        }
      }
    )
  }
  

  updatePizza = (event, pizza) => {
    event.preventDefault()
    let data = this.state.editedPizza
    // debugger
    fetch(URL + pizza.id, {
        method: "PATCH",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
    .then(res => res.json())
    .then(res => {
      fetch(URL)
      .then(res => res.json())
      .then(allPizzas => {this.setState({allPizzas})})
    })
  }
  
  editedPizza = (event, pizza) => {
   let value
    if(event.target.value === "true" || event.target.value === "false"){
      if (event.target.value === "true"){
        value = true
      }
      else {
        value = false
      }
      this.setState({
        editedPizza:{ 
          ...this.state.editedPizza,
          vegetarian: value
        }
      })
    }
    else{
   this.setState({
     editedPizza:{ 
       ...this.state.editedPizza,
      [event.target.name]: event.target.value
     }
   })}
  }

  
  render() {




    return (
      <Fragment>
        <Header />
        <PizzaForm pizzaToEdit={this.state.editedPizza} editedPizza={this.editedPizza} updatePizza={this.updatePizza}/>
        <PizzaList allPizzas={this.state.allPizzas} pizzaToEdit={this.pizzaToEdit}/>
      </Fragment>
    );
  }
}

export default App;
