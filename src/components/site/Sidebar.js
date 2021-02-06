import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import Resources from './Resources';

//added this in module 3.1, Link and the Route (exact path to JFCDemo) Switch below.
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';

//added this in module 4.2, as well as the Link and the Route (exact path to JSXRules) Switch below.
import JSXRules from '../concepts/JSXRules';
// 4.2 - Add a <Link> to our new component and
// 4.2 - Configure our <Switch> to load a <Route> based upon the url our Routes detect.

//added this in module 5.2, as well as the Link and the Route (exact path to State) Switch below.
import State from '../concepts/State';

//added this in module 6.2, the Link and the Route (exact path to Effects) Switch below.
import Effects from '../concepts/Effects';

//added this in module 6.2, the Link and the Route (exact path to PropsDemo) Switch below.
import PropsDemo from '../concepts/PropsDemo';

//added this in module 8.2 Hooks, the Link and the Route (exact path to Hooks2) Switch below.
import Hooks2 from '../concepts/Hooks';

//added this/1.0 Small Timer Apps, the Link and the Route (exact path to PropsDemo) Switch below.
//import TimePiectsApp from '../timer-apps/TimePiecesApp';  //First attempt at path.
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';

// added for NYT exercize
import NytApp from '../apps/nyt-app/NytApp';

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
            <Link to='/effects'>useEffects</Link>
          </li>
          <li>
            <Link to='/propsdemo'>Props Demo</Link>
          </li>
          <li>
            <Link to='/hooks2'>Hooks2</Link>
          </li>
          <li>
            <Link to='/timer'>Timers</Link>
          </li>
          <li>
            <Link to='/nyt'>New York Times</Link>
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
          <Route exact path='/effects'>
            <Effects />
          </Route>
          <Route exact path='/propsdemo'>
            <PropsDemo />
          </Route>
          <Route exact path='/hooks2'>
            <Hooks2 />
          </Route>
          <Route exact path='/timer/'>
            <TimePiecesApp />
          </Route>
          <Route exact path='/nyt/'>
            <NytApp />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
