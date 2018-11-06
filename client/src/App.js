import React from 'react';
import Home from './Home/Home';
import SignUpUser from './Home/SignUpUser';
import SignUpArtisan from './Home/SignUpArtisan';
import SignIn from './Home/signIn';
import './App.css';
import UserLayout from './UserLayout'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ServiceReq from './Home/ServiceReq';
import CheckUser from './Home/checkUser';


const AppRoute = ({ Component, Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )}
  />
)

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute path='/' exact Layout={UserLayout} Component={Home} />
        <AppRoute path='/signin' exact Layout={UserLayout} Component={SignIn} />
        <AppRoute path='/user/signup' exact Layout={UserLayout} Component={SignUpUser} />
        <AppRoute path='/artisan/signup' exact Layout={UserLayout} Component={SignUpArtisan} />
        <AppRoute path='/requestService' exact Layout={UserLayout} Component={ServiceReq} />
        <AppRoute path='/signup/verify/user' exact Layout={UserLayout} Component={CheckUser} />
      </Switch>
    </BrowserRouter>
  )
}


export default App;
