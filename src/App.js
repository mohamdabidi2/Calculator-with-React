import React, { Component } from 'react';
import { Numbers } from './components/Numbers/Numbers';
import { Controls } from './components/Controls/Controls';
import { Total } from './components/Total/total';
import { body } from './components/style/Style';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: ""
    };
  }
  delete = (e) => {
    let x = ''
    let y = this.state.total
    for (let i = 0; i < y.length - 1; i++) {
      x += y[i]
    }
    this.setState({
      total: x
    })



  }
  vide = () => {
    this.setState({
      total: ""
    })
  }
  setNumber = (e) => {
    this.setState({
      total: this.state.total + e
    })
    console.log(this.state.total)
  }
  setTotal = () => {
    this.setState({
      total: eval(this.state.total)
    })
  }
  render() {
    return (
      <div style={body}>
        <Total total={this.state.total} />



        <div style={{ display: "flex", justifyContent: "center" }}>

          <Numbers setNumber={this.setNumber} delete={this.delete} vide={this.vide} /> 
          <Controls setNumber={this.setNumber} setTotal={this.setTotal} />

        </div>



      </div>

    );
  }
}

export default App;