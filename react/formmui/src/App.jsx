import "./App.css";
import Form from "./component/form/Form";
import Starfield from "./component/form/Starfield";

function App() {
  return (
    <div className="App">
      <Starfield />
      <div className="content">
        <Form />
      </div>
    </div>
  );
}

export default App;
