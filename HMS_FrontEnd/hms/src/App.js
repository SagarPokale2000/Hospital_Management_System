import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Component/Home/Home";
import Login from "./Component/Pages/Login/Login";
import Signup from "./Component/Pages/Login/Signup";
import UserProvider from "./Context/UserProvider";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Component/Base/PrivateRoute";
import Accountant from "./Component/Pages/Accountant/Accountant";
import PatientDetails from "./Component/Pages/Doctor/PatientDetails";
import Admin from "./Component/CustomeNavBar/Admin/SideNavBar";
import PatientAccountList from "./Component/Pages/Accountant/PatientAccountList";
import PatientDashboard from "./Component/Pages/Patient/PatientDashboard";
import DoctorDashboard from "./Component/Pages/Doctor/DoctorDashboard";
import ReceptionistDashboard from "./Component/Pages/Receptionist/ReceptionistDashboard";
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
              <Route path="Patient" element={<PatientDashboard />}></Route>
              
              <Route path="PatientAccountList"element={<PatientAccountList />}></Route>

              <Route path="doctor" element={<DoctorDashboard />}></Route>
              <Route path="receptionist" element={<ReceptionistDashboard />}></Route>
              <Route path="accountant" element={<Accountant />}></Route>
              <Route path="admin" element={<Admin />}></Route>
              <Route path="update/patient/:id" element={<PatientDetails />}></Route>
              
            </Route>

            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
