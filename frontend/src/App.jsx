// import React, { Component } from 'react';
// import './App.css';

import HomePage from './pages/homePage';
import ChooseWordPage from './pages/chooseWord';
import CanvasPage from './pages/canvasPage';
// const history = createBrowserHistory();

// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       section: "",
//       title: "all",
//       width: 0,
//       height: 0,
//     };
//   }

//   render() {
  
//   return (
//     <div className="App">


// <Router>
//           <main>
//             <Routes>
//               <Route path="/" exact element={<HomePage/>} />
//               <Route path="/choose-words" exact element={<ChooseWordPage/>} />
//             </Routes>
//           </main>
//         </Router>
//     </div>
//   );
// }
// }

// export default App;

import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

export default function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/choose-words" element={<ChooseWordPage />} />
  <Route path="/canvas" element={<CanvasPage />} />

  
</Routes>
</BrowserRouter>

    // <Router>
    //   <div>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/">
    //         <HomePage />
    //       </Route>
    //       <Route path="/choose-words">
    //         <ChooseWordPage />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}