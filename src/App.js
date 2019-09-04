import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

state = {
  pizzas: [],
  editPizza: {
    topping: '',
    size: '',
    vegetarian: null
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
  let veggie = e.target.value === 'true'? true : false
  this.setState({
    editPizza: {...this.state.editPizza, 
      vegetarian: veggie
    }
  })

}

updatePizza = (id) => {
  let data = {
    topping: this.state.editPizza.topping,
    size: this.state.editPizza.size,
    vegetarian: this.state.editPizza.vegetarian
  }
  fetch(`http://localhost:3000/pizzas/${id}`,{
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'accepts': 'application/json'
    },
    body: JSON.stringify(data)
  })
.then(res => res.json())
.then(p => {
  let updatePizza = this.state.pizzas.map((za) => {
    if(za.id === p.id){
     return p
    }
     else{
       return za
     }
    })
    this.setState({ pizzas: updatePizza})
})
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
        updatePizza={this.updatePizza}
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
