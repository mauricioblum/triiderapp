import React, { Component } from 'react'

export default class Pedido extends Component {
state = {
  pedidos: [],
};

async componentDidMount(){

  await this.setState({pedidos: this.props.data})
}

  render() {

    return (
      <h1>Pedido1</h1>
     
    )
  }
}
