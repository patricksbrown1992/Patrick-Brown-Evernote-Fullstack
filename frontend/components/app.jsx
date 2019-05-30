import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SplashForm from './splash/splashForm';
<<<<<<< HEAD
import LogInForm from './logInForm';
import SignUpForm from './signUp/signUpContainer';
=======
import LogInForm from './logIn/logInContainer';
import SignUpForm from './signUp/signUpContainer';
import UsernameForm from './username/usernameForm';
>>>>>>> user_log_in
import { Authorized, ProtectedRoute } from '../util/routeUtil';
const App = () => (
    <div>

        <Switch>
            <Route exact path='/username' component={UsernameForm} />
            <Authorized exact path='/login' component={LogInForm} />
            <Route exact path='/' component={SplashForm} />
            <Authorized exact path='/signup' component={SignUpForm} />
        </Switch>
   
    </div>
    
)

export default App;