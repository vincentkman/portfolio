import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioInfo from './pages/PortfolioInfo';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { ProjectProvider } from './context';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

function App() {
  return (
    <div className="App">
      <ProjectProvider>
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route path='/portfolio/:id' component={PortfolioInfo} />
              <Route path='/contact' component={Contact} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </>
        </Router>
      </ProjectProvider>
    </div>
  );
}

export default App;
