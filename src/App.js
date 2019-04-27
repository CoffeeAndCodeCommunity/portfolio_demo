import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Hello from './components/Hello'
import About from './components/About'
import Projects from './components/Projects'

import './css/tailwind.css'

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col w-full fixed pin-l pin-y">
          <Header />
          <div className="px-4 pt-4 flex-1 overflow-y-scrol">
            <Switch>
              <Route exact path="/" component={Hello} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/about" component={About} />
            </Switch>
            {/* <Hello /> */}
          </div>
          <Footer />
        </div>
      </div>

    </>
  );
}

export default App;
