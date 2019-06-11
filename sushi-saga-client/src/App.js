import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushiNum: 0,
      sushis: [],
      sushi0: false,
      sushi1: false,
      sushi2: false,
      sushi3: false,
      budget: 50
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
    .catch(error => console.log(error.message))
  }

  changeNum = () => this.setState({
    sushiNum: this.state.sushiNum + 4,
    sushi0: false,
    sushi1: false,
    sushi2: false,
    sushi3: false,
  })

  buySushi = price => {
    if (this.state.budget - price >= 0 ) {
      this.setState({
        budget: this.state.budget - price
      })
    }
  }

  handleEaten = (ateID, price) => {
    if (this.state.budget - price >= 0 ) {
      this.setState({
        [`sushi${ateID}`]: true
      })
    } else {
      console.log("budget exceeded!!!")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer buySushi={this.buySushi} eatSushi={this.handleEaten} data={this.state} moreSushi={this.changeNum} sushis={this.state.sushis} sushiNum={this.state.sushiNum}  />
        <Table data={this.state} money={this.state.budget}/>
      </div>
    );
  }
}

export default App;