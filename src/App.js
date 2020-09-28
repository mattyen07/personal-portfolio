import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

//Dependencies
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Main from './Components/main';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
        <Route exact path="/" component={Main} />
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path ="/contact" component={Contact} />
    </>
    
  );
}

export default App;
