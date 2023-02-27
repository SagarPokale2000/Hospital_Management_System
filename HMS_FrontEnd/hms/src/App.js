import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Temp from "./Component/Home/Temp";
import Login from "./Component/Pages/Login/Login";
import Signup from "./Component/Pages/Login/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Temp /> */}
          {/* <Home /> */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<Signup />}></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
