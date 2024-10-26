import "./App.css";
import Form from "./component/form/Form";
import Starfield from "./component/form/Starfield";

function App() {
  return (
    <div className="App">
      <div className="starfield">
        <Starfield />
      </div>
      <div className="content">
        <Form />
      </div>
    </div>
  );
}

export default App;
