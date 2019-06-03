import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SplashForm from './splash/splashForm';
import LogInForm from './logIn/logInContainer';
import SignUpForm from './signUp/signUpContainer';
import { Authorized, ProtectedRoute } from '../util/routeUtil';
import NotebooksIndexForm from './notebooks/notebooksIndexForm';
import UsernameForm from './username/usernameContainer';
import FeaturesForm from './features/featuresForm';

const App = () => (
   
    <>
        <Switch>
            <ProtectedRoute exact path ='/notebooks' component={NotebooksIndexForm} />
            <Route exact path ='/features' component={FeaturesForm}/>
            <ProtectedRoute exact path='/username' component={UsernameForm} />
            <Authorized exact path='/login' component={LogInForm} />
            <Route exact path='/' component={SplashForm} />
            <Authorized exact path='/signup' component={SignUpForm} />
        </Switch>
   </>
  
    
)

export default App;