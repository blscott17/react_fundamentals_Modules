import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
//
//
// Before changes in 3.1 Functional Components.
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Router>
//         <Sidebar />
//       </Router>
//       <Footer />
//     </div>
//   );
// };
//App.js - holding the FunctionalComponentDemo code for now.
// REMEMber you were in THE MIDDLE OF THIS
//
