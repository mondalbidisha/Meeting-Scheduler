import React from 'react';
import './App.css';
import Home from './Components/Home';
import FormContainer from './Components/FormContainer';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact /> 
        <Route path="/add-meeting" component={FormContainer} />
      </Switch>
    </main>
  );
}

export default App;
