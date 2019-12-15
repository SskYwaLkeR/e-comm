import React from 'react';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" exact={true} component={ShopPage} />
        <Route path="/signin" exact={true} component={SignInAndSignUpPage} />        

      </Switch>
    </div>
  );
}

export default App;
