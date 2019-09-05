import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor(){
    super()
    this.state = {
      pizzas: [],
      pizzaEdit: {}
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }

  addPizza = (e, pizzaEdit) => {
    const data = pizzaEdit

    fetch('http://localhost:3000/pizzas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(pizza => {
      this.setState({
        pizzas: [...this.state.pizzas, pizza]
      })
    })

  }

  handleChange = (e) => {
    this.setState({
      pizzaEdit: {
        ...this.state.pizzaEdit,
        [e.target.name]: e.target.value
      }
     
    })
  }

  editPizza = (e, pizzaObj) => {
    this.setState({
      pizzaEdit: pizzaObj
    })

  }



  handleChangeVegetarian = (event) => {
    this.setState({
      pizzaEdit: {
        ...this.state.pizzaEdit,
        vegetarian: event.target.value === 'true' ? true : false
      }
    })
  }

  render() {
    const {pizzas, pizzaEdit} =this.state
    return (
      <Fragment>
        <Header/>
        <PizzaForm addPizza={this.addPizza} pizzaEdit={pizzaEdit} handleChange={this.handleChange} handleChangeVegetarian={this.handleChangeVegetarian}/>
        <PizzaList pizzas={pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
