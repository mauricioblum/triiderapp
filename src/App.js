import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Pedido from './components/Pedido';
import Orcamento from './components/Orcamento';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/orcamento" component={Orcamento} />
          <Route path="/pedido" component={Pedido} />

        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
