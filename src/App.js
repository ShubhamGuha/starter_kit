import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">ॐ गम गणपतये नमः</NavbarBrand>
          </div>
        </Navbar>
      </div>
  );
}

export default App;
