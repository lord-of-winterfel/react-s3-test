import "./App.css";
import { Button } from "custom-react-components-arundinesh06";

function App() {
  const sum = 1 + 2;
  console.log(sum);
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}

export default App;
