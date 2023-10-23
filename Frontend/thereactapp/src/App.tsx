// import React from 'react';
// import './App.css';
// import Homepage from './Homepage';
// import LogIn from './LogIn';
// import { Route, Router } from 'react-router-dom';


// function App() {

//   return (
//     <Router location={''}>
//       <Route path="/" element={<LogIn/>} />
//       <Route path="/componentB" element={<Homepage/>} />
//     </Router>



//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './LogIn';
import HomePage from './Homepage';


function App() {
  return (
    <Router>

    </Router>
  );
};

export default App;