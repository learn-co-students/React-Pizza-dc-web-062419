import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: [],
      selection: {
        topping: "",
        size: "",
        vegetarian: null
      }
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(res => res.json())
      .then(pizzas => {
        let pizzasArray = pizzas.map(pizza => {
          return { ...pizza };
        });
        this.setState({ pizzas: pizzasArray });
      });
  }

  onEditPizza = pizzaObj => {
    let p = this.state.pizzas.find(za => za === pizzaObj);
    this.setState({ selection: p });
  };

  editTopping = event => {
    this.setState({
      selection: { ...this.state.selection, topping: event.target.value }
    });
  };

  editSize = event => {
    this.setState({
      selection: { ...this.state.selection, size: event.target.value }
    });
  };

  editVeg = event => {
    let veggie = event.target.value === "true" ? true : false;
    this.setState({
      selection: { ...this.state.selection, vegetarian: veggie }
    });
  };

  // handleCheck = event => {
  //   let pizza = this.state.selection;
  //   pizza.vegetarian = !pizza.vegetarian;

  //   if (event.target.checked === true) {
  //     this.setState({ selection: pizza });
  //   }
  // };

  onFormSubmit = id => {
    let data = {
      topping: this.state.selection.topping,
      size: this.state.selection.size,
      vegetarian: this.state.selection.vegetarian
    };

    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(p => {
        let updatePizza = this.state.pizzas.map(za => {
          if (za.id === p.id) {
            return p;
          } else {
            return za;
          }
        });
        this.setState({ pizzas: updatePizza });
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          selection={this.state.selection}
          onFormSubmit={this.onFormSubmit}
          editTopping={this.editTopping}
          editSize={this.editSize}
          editVeg={this.editVeg}
        />
        <PizzaList pizzas={this.state.pizzas} onEditPizza={this.onEditPizza} />
      </Fragment>
    );
  }
}

export default App;
