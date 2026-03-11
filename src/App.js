import logo from "./logo.svg";
import "./App.css";
import { Button } from "custom-react-components-arundinesh06";

function App() {
  const sum = 1 + 2;
  console.log(sum);
  return (
    <div className="App">
      <Button variant="danger">Power</Button>
    </div>
  );
}

export default App;
