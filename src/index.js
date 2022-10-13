// Your code here!
import ReactDOM from "react-dom";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div id="container">
      <div id="navbar">Counter.js</div>
      <div id="counter">
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("app"));

//-----------------------------
import logo from "./logo.svg";
import "./App.css";

// import { useState } from "react";
// import PointCounter from "./components/Pointcounter";

// function App() {
//   //variable, setter for variable
//   const [username, setUsername] = useState(""); //default points is 0

//   const updateUsername = (event) => {
//     setUsername(event.target.value);
//   };

//   const appStyles = {
//     backgroundColor: "gray",
//   };

//   return (
//     <div className="App" style={appStyles}>
//       <img src={logo} className="App-logo" alt="logo" />
//       <PointCounter />

//       {/**display pts to user */}
//       <p>Username: {username}</p>

//       <br></br>
//       <input value={username} onChange={updateUsername} />
//     </div>
//   );
// }

// export default App;
