import React from 'react';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div >
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
