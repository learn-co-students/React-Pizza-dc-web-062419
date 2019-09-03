import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzas: [],
      pizzaToEdit: {}
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({
      pizzas
    }))
  }

  editPizza = (pizzaObject) => {
    this.setState({
      pizzaToEdit: pizzaObject
    })
  }

  handlePizzaChange = (event) =>{
    this.setState({
      pizzaToEdit: {
        ...this.state.pizzaToEdit,
        [event.target.name]: event.target.value
      }
    })
  }

  handleVegetarianChange = (event) => {
    this.setState({
      pizzaToEdit: {
        ...this.state.pizzaToEdit,
        vegetarian: event.target.value === 'true' ? true : false
      }
    })
  }

  handleSubmit = (pizzaObject)=>{
    console.log(pizzaObject.vegetarian)
    const pizzaData = {
      topping: pizzaObject.topping,
      size: pizzaObject.size,
      vegetarian: pizzaObject.vegetarian
    }

    fetch(`http://localhost:3000/pizzas/${pizzaObject.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, 
      body: JSON.stringify(pizzaData)
    })
    .then(res => res.json())
    .then(editedPizza => { 
        const pizzas = this.state.pizzas.map( 
          pizza => pizza.id === pizzaObject.id ? editedPizza : pizza )
        return this.setState({ pizzas })
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaToEdit={this.state.pizzaToEdit}
          handlePizzaChange={this.handlePizzaChange}
          handleVegetarianChange={this.handleVegetarianChange}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList pizzas={this.state.pizzas}
          editPizza={this.editPizza}
        />
      </Fragment>
    );
  }
}

export default App;
