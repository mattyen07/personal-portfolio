import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

//Dependencies
import About from './Components/About';
import Contact from './Components/Contact';
import Main from './Components/main';
import Projects from './Components/Projects';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
        <Route exact path="/" component={Main} />
        <Route path="/aboutme" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path ="/contact" component={Contact} />
    </>
    
  );
}

export default App;
