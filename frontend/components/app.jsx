import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SplashForm from './splash/splashForm';
import LogInForm from './logIn/logInForm';
import SignUpForm from './signUp/signUpContainer';
import { Authorized, ProtectedRoute } from '../util/routeUtil';
const App = () => (
    <div>

        <Switch>
            <Authorized exact path='/login' component={LogInForm} />
            <Route exact path='/' component={SplashForm} />
            <Authorized exact path='/signup' component={SignUpForm} />
        </Switch>
   
    </div>
    
)

export default App;