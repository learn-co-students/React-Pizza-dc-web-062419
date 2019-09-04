import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList' 

const URL = 'http://localhost:3000/pizzas'

class App extends Component {

  constructor(){
    super()
    this.state = {
      pizzas: [],
      createPizza: {
        topping: '',
        size: '',
        veggie: '',
        edit: null,
        id: null
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      createPizza: {
        ...this.state.createPizza,
        [`${e.target.name}`]: e.target.value
      }
    })
  }

  handleSubmit = () => {
    let path = this.state.createPizza.edit ? 'PATCH' : 'POST' 
    let newURL = this.state.createPizza.edit ? URL + `/${this.state.createPizza.id}` : URL
    let data = {...this.state.createPizza, veggie: this.state.createPizza.veggie === 'Vegetarian' ? true : false}
    fetch(newURL, {
      method: path,
      headers: {
      "Content-Type": 'application/json',
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json()).then(newPizza => {console.log(newPizza); 
      let ids = this.state.pizzas.map(pizza => pizza.id)
      debugger
      if (ids.includes(newPizza.id)) {
         let pizzas = this.state.pizzas.map(pizza => {
            if (pizza.id === newPizza.id) {
            return newPizza
            } else {
              return pizza
            }
          } )
          this.setState({...this.state, pizzas: [...pizzas], createPizza: {topping: '', size: '', veggie: '', edit: null, id: null}})
      } else {
      this.setState({...this.state, pizzas: [newPizza, ...this.state.pizzas], createPizza: {topping: '', size: '', veggie: '', edit: null, id: null}})
      }
    })
  }

  onEdit = (id, topping, size, vegetarian) => {
    console.log('hit edit!')
    debugger
    this.setState({
      ...this.state,
      createPizza: {
        topping: topping,
        size: size,
        veggie: vegetarian ? "Vegetarian" : "Not Vegetarian",
        edit: true,
        id: id
      }
    })
  }


  componentDidMount(){
    fetch(URL).then(resp => resp.json()).then(pizzas => {console.log(pizzas); this.setState({pizzas: pizzas})})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} Pizza={this.state.createPizza} checkVeggie={this.state.createPizza.veggie}/>
        <PizzaList pizzas={this.state.pizzas} onEdit={this.onEdit}/>
      </Fragment>
    );
  }
}

export default App;
