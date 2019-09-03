import React, { Component } from 'react';
import Header from './components/Header';
import PizzaForm from './components/PizzaForm';
import PizzaList from './containers/PizzaList';
class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: {
      id: 0,
      topping: '',
      size: '',
      vegetarian: false,
    },
  };

  componentDidMount() {
    fetch(`http://localhost:3000/pizzas`)
      .then(res => res.json())
      .then(pizzas => this.setState({ pizzas }));
  }

  onSelectPizza = pizza => {
    this.setState({ selectedPizza: pizza });
  };

  onEditPizza = () => {
    let pizza = this.state.selectedPizza;
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(pizza),
    })
      .then(res => res.json())
      .then(() => {
        const newPizzas = this.state.pizzas.map(pizza =>
          pizza.id === this.state.selectedPizza.id ? this.state.selectedPizza : pizza,
        );
        this.setState({ pizzas: newPizzas });
      });
  };

  onFormChange = e => {
    this.setState({
      selectedPizza: { ...this.state.selectedPizza, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <>
        <Header />
        <PizzaForm
          selectedPizza={this.state.selectedPizza}
          onFormChange={this.onFormChange}
          onEditPizza={this.onEditPizza}
        />
        <PizzaList pizzas={this.state.pizzas} onSelectPizza={this.onSelectPizza} />
      </>
    );
  }
}

export default App;
