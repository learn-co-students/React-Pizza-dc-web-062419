import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";

class App extends Component {
  state = {
    data: [],
    pizzaUpdates: {
      id: 0,
      size: "",
      topping: "",
      vegetarian: false
    }
  };
  setTopping = event => {
    event.preventDefault();
    this.setState({
      pizzaUpdates: { ...this.state.pizzaUpdates, topping: event.target.value }
    });
  };
  setSize = event => {
    event.preventDefault();
    this.setState({
      pizzaUpdates: { ...this.state.pizzaUpdates, size: event.target.value }
    });
  };
  setVegetarian = event => {
    this.setState({
      pizzaUpdates: { ...this.state.pizzaUpdates, vegetarian: !this.state.pizzaUpdates.vegetarian }
    });
  };
  pizzaToForm = clickedPizza => {
    this.setState({ pizzaUpdates: clickedPizza });
  };
  editPizza = () => {
    const contentObj = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.pizzaUpdates)
    };
    fetch(
      `http://localhost:3000/pizzas/${this.state.pizzaUpdates.id}`,
      contentObj
    )
      .then(resp => resp.json())
      .then(returnedData =>
        this.setState({
          data: this.state.data.map(pizza =>
            pizza.id === this.state.pizzaUpdates.id
              ? (pizza = this.state.pizzaUpdates)
              : pizza
          )
        })
      );
  };
  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(resp => resp.json())
      .then(data => this.setState({ data: data }));
  }
  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizzaToEdit={this.state.pizzaToEdit}
          pizzaUpdates={this.state.pizzaUpdates}
          setTopping={this.setTopping}
          setSize={this.setSize}
          setVegetarian={this.setVegetarian}
          editPizza={this.editPizza}
        />
        <PizzaList
          pizzas={this.state.data}
          pizzaToForm={this.pizzaToForm}
        />
      </Fragment>
    );
  }
}

export default App;
