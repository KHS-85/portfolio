import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import Projects from './pages/Projects/Projects'
import Misc from './pages/Misc/Misc'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Misc" component={Misc} />
          <Route path="/Contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
    </div>    
    </BrowserRouter>
  );
}

export default App;
