import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Admin-Login/Login";
import { Routes } from "react-router-dom";
import StudentLanding from "./components/StudentLanding";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/StudentLanding" element={<StudentLanding />} />
      </Routes>
    </div>
  );
}

export default App;
