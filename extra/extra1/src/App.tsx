import { useState } from "react";
import "./App.css";
import CustomInput from "./CustomInput";

function App() {
  const [state, setState] = useState(false);

  return (
    <>
      <button onClick={() => setState(!state)} style={{ margin: "0.1rem" }}>
        Switch
      </button>
      {state ? (
        <input placeholder="Input 1" />
      ) : (
        <input placeholder="Input 2" />
      )}
      {state ? <input placeholder="Input 3" /> : <CustomInput />}
    </>
  );
}

export default App;
