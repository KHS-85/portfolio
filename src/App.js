import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import Projects from './pages/Projects/Projects'
import CV from './pages/CV/CV';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Projects" component={Projects} />
          <Route path="/CV" component={CV} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
    </div>    
    </BrowserRouter>
  );
}

export default App;
