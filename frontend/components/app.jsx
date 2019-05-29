import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SplashForm from './splash/splashContainer';
const App = () => (
    <div>
 
        
        <h1>NeverNote</h1>
        < SplashForm />
       
           
        
    </div>
    
)

export default App;