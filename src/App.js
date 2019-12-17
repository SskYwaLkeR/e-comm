import React from 'react';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {Route, Switch} from 'react-router-dom';
import {auth} from './firebase/firebase.util'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  };

  unsubscribeFromAuth = null;

  componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user)
      this.setState({currentUser: user})
    })
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/shop" exact={true} component={ShopPage} />
          <Route path="/signin" exact={true} component={SignInAndSignUpPage} />        
  
        </Switch>
      </div>
    );
  }
  
}

export default App;
