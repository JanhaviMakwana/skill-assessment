import FormWithHook from "./Components/FormWithFormikHook";
import FormWithFormik from "./Components/FormWithFormik";
import FormWithReact from "./Components/FormWithReact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <FormWithReact />
      <FormWithFormik />
      <FormWithHook />
    </div>
  );
}

export default App;
