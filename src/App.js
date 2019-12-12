import React from 'react';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import {Route, Switch} from 'react-router-dom';

const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/hats" exact={true} component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
