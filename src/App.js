import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: [],
      options: {
        id: "",
        topping: "",
        size: "",
        vegetarian: null
      }
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(resp => resp.json())
      .then(pizzas => this.setState({ pizzas: pizzas }));
  }

  handleClick = pizza => {
    this.setState({
      options: {
        ...this.state.options,
        id: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      }
    });
  };
  handleSelect = event => {
    event.preventDefault();
    this.setState({
      options: {
        ...this.state.options,
        size: event.target.value
      }
    });
  };
  handleToppingsChange = event => {
    this.setState({
      options: {
        ...this.state.options,
        topping: event.target.value
      }
    });
  };
  handleChange = event => {
    if (event.target.value === "Not Vegetarian") {
      this.setState({
        options: {
          ...this.state.options,
          vegetarian: !event.target.checked
        }
      });
    } else {
      this.setState({
        options: {
          ...this.state.options,
          vegetarian: event.target.checked
        }
      });
    }
  };

  handleSubmit = options => {
    if (options.id) {
      fetch(`http://localhost:3000/pizzas/${options.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          topping: options.topping,
          size: options.size,
          vegetarian: options.vegetarian
        })
      })
        .then(resp => resp.json())
        .then(data => {
          let col = this.state.pizzas;
          let pSlice = this.state.pizzas.find(p => p.id === data.id);
          let i = col.indexOf(pSlice);
          let newArray = [
            ...col.slice(0, i),
            {
              ...pSlice,
              topping: data.topping,
              size: data.size,
              vegetarian: data.vegetarian
            },
            ...col.slice(i + 1)
          ];
          this.setState({
            pizzas: newArray
          });
        });
    } else {
      fetch("http://localhost:3000/pizzas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          topping: options.topping,
          size: options.size,
          vegetarian: options.vegetarian
        })
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          this.setState({ pizzas: [...this.state.pizzas, data] });
        });
    }
  };
  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          handleToppingsChange={this.handleToppingsChange}
          options={this.state.options}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleSelect={this.handleSelect}
        />
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick} />
      </Fragment>
    );
  }
}

export default App;
