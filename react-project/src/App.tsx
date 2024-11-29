import "./App.css";
import "./styles/Colors.css";

import reactSVG from "./assets/react.svg";

function App() {
  return (
    <div className="container">
      <h2 style={{ color: "black" }}>Welcome to</h2>
      <h1 style={{ color: "black" }}>React Basic</h1>
      <img src={reactSVG}></img>
    </div>
  );
}

export default App;
