import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SplashForm from './splash/splashForm';
import LogInForm from './logInForm';
import SignUpForm from './signUpForm';
const App = () => (
    <div>

        <Switch>
            <Route path='/login' component={LogInForm} />
            <Route exact path='/' component={SplashForm} />
            <Route exact path='/signup' component={SignUpForm} />
        </Switch>
   
    </div>
    
)

export default App;