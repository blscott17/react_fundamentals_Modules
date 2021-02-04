import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import Resources from './Resources';

//added this in module 3.1, as well as the exact path to FCDemo below.
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
//added this in module 4.2, as well as the exact path to JSXRules below.
import JSXRules from '../concepts/JSXRules';
// 4.2 - Add a <Link> to our new component and
// 4.2 - Configure our <Switch> to load a <Route> based upon the url our Routes detect.

//added this in module 5.2, as well as the exact path to State below.
import State from '../concepts/State';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-list-styling'>
        <ul className='sidebar-list-unstyled'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/functionalcomponent'>Functional Component</Link>
          </li>
          <li>
            <Link to='/jsxrules'>JSXRules</Link>
          </li>
          <li>
            <Link to='/state'>useState</Link>
          </li>
          <li>
            <Link to='/resources'>Resources</Link>
          </li>
        </ul>
      </div>
      <div className='sidebar-route'>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/resources'>
            <Resources />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/jsxrules'>
            <JSXRules />
          </Route>
          <Route exact path='/functionalcomponent'>
            <FunctionalComponentDemo />
          </Route>
          <Route exact path='/state'>
            <State />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
