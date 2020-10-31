import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscribeFromAuth = null;  

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });        
      }

      setCurrentUser(userAuth);      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route 
            exact 
            path='/signin' 
            render={() => 
            this.props.currentUser ? (
              <Redirect to='/' />
              ) :(
              <SignInAndSignUpPage />
              ) 
            }
          />
        </Switch>        
      </div>
    );
  }  
}


const mapStateToProps = ({ user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({

  // Dispatch is a way for redux to know that whatever action is being passed to it, is going to be an action object that is going to be passed to every reducer.

  // User would be the payload.
  setCurrentUser: user => dispatch(setCurrentUser(user))
});



// Connect can take 1 or 2 arguments. The first is mapStateToProps which allows is to take state from other reducers, the second is mapDispatchToProps which 

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);

  // All this is a lot of fun
  