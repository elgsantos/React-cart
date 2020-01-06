import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { ProductsList } from './views/ProductsList';
import ProductComponent from './views/Product';
import { Store } from './store';

function App() {
  return (
    <Provider store={Store}>
      <div className="main-app">
        <h1>Amazing Store</h1>
        <BrowserRouter>
          <Route exact path="/" component={ProductsList} />
          <Route path="/product/:id" component={ProductComponent} />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
