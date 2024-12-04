import "./App.css";
import "./styles/Colors.css";

import reactSVG from "./assets/react.svg";
import CustomButton from "./components/CustomButton";

function App() {
  const withButton: boolean = true;

  return (
    <div className="container">
      <h2 style={{ color: "black" }}>Welcome to</h2>
      <h1 style={{ color: "black" }}>React Basic</h1>
      {withButton ? <CustomButton /> : null}
      <img src={reactSVG}></img>
    </div>
  );
}

export default App;
