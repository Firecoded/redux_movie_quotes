import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import {Route} from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import SecretList from './secret_list';
import MovieQuote from './movie_quotes.js';
import SignUp from './sign_up';

const App = () => (
    <div>
    	<Nav/>
    	<div className = 'container'>
    		<Route exact path ='/' component = {Home}/>
    		<Route path = '/about' component = {About}/>
    		<Route path = '/secret-list' component = {SecretList}/>
    		<Route path = '/movie-quote' component = {MovieQuote}/>
    		<Route path = '/sign-up' component = {SignUp}/>
    	</div>
    </div>	
);

export default App;
