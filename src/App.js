import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Contact, Home, Projects } from './pages';
import { NotFound, Footer, Header } from './components';


function App() {
  return (
    <Router>
        <Header />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>

        <Footer />
    </Router>
  );
}

export default App;
