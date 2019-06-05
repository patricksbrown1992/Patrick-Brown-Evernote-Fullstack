import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SplashForm from './splash/splashForm';
import LogInForm from './logIn/logInContainer';
import SignUpForm from './signUp/signUpContainer';
import { Authorized, ProtectedRoute } from '../util/routeUtil';
import NotebooksIndexForm from './notebooks/notebooksIndexContainer';
import UsernameForm2 from './username/usernameForm2Container';
import FeaturesForm from './features/featuresForm';
import NotebookShowContainer2 from './notebooks/notebookShowContainer2';
import Modal from './modal/modal'

const App = () => (
   
    <>
    <Modal />
        <Switch>
            <ProtectedRoute exact path ='/notebooks' component={NotebooksIndexForm} />
            <Route exact path ='/features' component={FeaturesForm}/>
            <ProtectedRoute exact path='/username2' component={UsernameForm2} />
            <ProtectedRoute path='/username/:notebook_id' component={NotebookShowContainer2}/>
            <Authorized exact path='/login' component={LogInForm} />
            <Route exact path='/' component={SplashForm} />
            <Authorized exact path='/signup' component={SignUpForm} />
        </Switch>
   </>
  
    
)

export default App;