import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Component/Home/Home";
import Temp from "./Component/Home/Temp";
import Login from "./Component/Pages/Login/Login";
import Signup from "./Component/Pages/Login/Signup";
import UserContext from "./Context/UserContext";
import UserProvider from "./Context/UserProvider";
import { ToastContainer, toast } from "react-toastify";
import Patient from "./Component/Pages/Patient/Patient";
import PrivateRoute from "./Component/Base/PrivateRoute";
import Accountant from "./Component/Pages/Accountant/Accountant";
import Admin from "./Component/Pages/Admin/Admin";
import Doctor from "./Component/Pages/Doctor/Doctor";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          {/* <ToastContainer position='bottom-center' /> */}
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

          <Routes>
            {/* <Temp /> */}
            {/* <Home /> */}
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signUp" element={<Signup />}></Route>
            <Route path="/user" element={<PrivateRoute />}>
              <Route path="patient" element={<Patient />}></Route>
              <Route path="doctor" element={<Doctor />}></Route>
              <Route path="receptionist" element={<Patient />}></Route>
              <Route path="accountant" element={<Accountant />}></Route>
              <Route path="admin" element={<Admin />}></Route>
            </Route>
            <Route path="/" element={<Home />}></Route> 
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
