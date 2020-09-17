import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
// (we need to import all pages here BELOW)
import Home from './Home';
import Simon from './Simon';
import Dan from './Dan';
import Nick from './Nick';
import JonGames from './Jon';
import NoMatch from './NoMatch';
import LayneBlog from './Layne';
import Interest from './Devin';
import { Container, Card } from "semantic-ui-react"; 
import LayneBlog from './Layne';
import Devin from './Devin';
import { Container } from "semantic-ui-react"; 



const App = () => {
return (
<>
  <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/simon" component={Simon}/> 
        <Route exact path="/dan" component={Dan}/>
        <Route exact path="/nick" component={Nick}/>
        <Route exact path="/layne" component={LayneBlog}/>
        <Route exact path="/jon" component={JonGames}/>
        <Route exact path="/devin" component={Interest}/>
        <Route component={NoMatch}/>
      </Switch>
    </Container>
  </>
);
}

export default App;
