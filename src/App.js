import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      pizzaIndex: [],
      pizzaToEdit: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(r => r.json())
      .then(data => {
        this.setState({
          pizzaIndex: data
        });
      });
  }

  onEditPizza = e => {
    let pizzaId = parseInt(e.currentTarget.id);
    let pizzaObj = this.state.pizzaIndex.find(function(pizza) {
      return pizza.id === pizzaId;
    });
    this.setState({
      pizzaToEdit: pizzaObj
    });
  };

  edit = e => {
    let value = e.target.value;
    let obj = this.state.pizzaToEdit;
    if (e.target.name === "topping") {
      obj.topping = value;
      this.setState({ pizzaToEdit: obj });
    } else if (e.target.name === "size") {
      obj.size = value;
      this.setState({ pizzaToEdit: obj });
    } else if (e.target.name === "veg") {
      obj.vegetarian = value;
      this.setState({ pizzaToEdit: obj });
    } else if (e.target.name === "notVeg") {
      obj.vegetarian = value;
      this.setState({ pizzaToEdit: obj });
    }

    let newIndex = this.state.pizzaIndex.map(piz => {
      if (piz.id === obj.id) {
        return (piz = obj);
      } else {
        return piz;
      }
    });
    this.setState({
      pizzaIndex: newIndex
    });
  };

  persist = (e, pizza) => {
    e.preventDefault();
    debugger;
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(pizza)
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={this.state.pizzaToEdit}
          edit={this.edit}
          persist={this.persist}
        />
        <PizzaList
          pizzas={this.state.pizzaIndex}
          onEditPizza={this.onEditPizza}
        />
      </Fragment>
    );
  }
}

export default App;
