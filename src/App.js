import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignIn_SignUp from "./pages/sign-in_and_sign-up/SignIn-SignUp";
import { auth } from "./firebase/firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render () {
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={Shop} />
            <Route path="/signin" component={SignIn_SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
