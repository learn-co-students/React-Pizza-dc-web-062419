import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import { timingSafeEqual } from 'crypto';
class App extends Component {

state = {
  pizzas: [],
  editPizza: {
    topping: '',
    size: '',
    // vegetarian: null
  }
}

componentDidMount(){
  fetch('http://localhost:3000/pizzas')
  .then(res => res.json())
  .then(data => this.setState({
    pizzas: data
  }))
}

renderEditButt = (pizza) => {
  let p = this.state.pizzas.find(za => za === pizza)
  this.setState({editPizza: p})
}

editTopping = (e) => {
  this.setState({
    editPizza: {...this.state.editPizza, 
      topping: e.target.value
    }
  })
}

editSize = (e) => {
  this.setState({
    editPizza: {...this.state.editPizza, 
      size: e.target.value
    }
  })
}

editVeg = (e) => {
  this.setState({
    editPizza: {...this.state.editPizza, 
      vegetarian: e.target.value
    }
  })
}

renderSubmit = (id) =>  {
this.state.pizzas.map(za => id === za.id)

}


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
        pizza={this.state.editPizza}
        editTopping={this.editTopping}
        editSize={this.editSize}
        editVeg={this.editVeg}
        renderSubmit={this.renderSubmit}
        />
        <PizzaList
        pizzas={this.state.pizzas}
        editButt={this.renderEditButt}
        />
      </Fragment>
    );
  }
}

export default App;
