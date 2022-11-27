import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Status from "./Status";
import Week from "./Week";
import Ratio from "./Ratio";
import Closure from "./Closure";
import Average from "./Average";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Status />}></Route>
          <Route exact path="/week" element={<Week />}></Route>
          <Route exact path="/ratio" element={<Ratio />}></Route>
          <Route exact path="/closure" element={<Closure />}></Route>
          <Route exact path="/average" element={<Average />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
