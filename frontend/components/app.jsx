import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SplashForm from './splash/splashForm';
import LogInForm from './logInForm';
const App = () => (
    <div>
        <header>
            <h1 className = 'title'>NeverNote</h1>
           
        </header>
        
       
        <Switch>
            <Route path='/login' component={LogInForm} />
            <Route exact path='/' component={SplashForm} />
        </Switch>
       
           
        
    </div>
    
)

export default App;