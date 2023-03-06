import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Component/Home/Home";
import Login from "./Component/Pages/Login/Login";
import Signup from "./Component/Pages/Login/Signup";
import UserProvider from "./Context/UserProvider";
import { ToastContainer, toast } from "react-toastify";
import PrivateRoute from "./Component/Base/PrivateRoute";
import Accountant from "./Component/Pages/Accountant/Accountant";
import Receptionist from "./Component/Pages/Receptionist/Receptionist";
import PatientDetails from "./Component/Pages/Doctor/PatientDetails";
import Admin from "./Component/CustomeNavBar/Admin/SideNavBar";
import AddResources from "./Component/Pages/HospitalResources/AddResources";
import { GetAllResources } from "./ServerCall/HospitalResources/Resources";
import AdminGetResources from "./Component/Pages/HospitalResources/AdminGetResources";
import PatientAccountList from "./Component/Pages/Accountant/PatientAccountList";
import PatientDashboard from "./Component/Pages/Patient/PatientDashboard";
import DoctorDashboard from "./Component/Pages/Doctor/DoctorDashboard";
import AppointmentList from "./Component/Pages/Receptionist/AppointmentList";
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

              <Route path="receptionist" element={<Receptionist />}></Route>
              <Route path="accountant" element={<Accountant />}></Route>
              <Route path="admin" element={<Admin />}></Route>
              <Route path="AppointmentList" element={<AppointmentList />}></Route>
              <Route path="update/patient/:id" element={<PatientDetails />}></Route>
            </Route>
            <Route path="/AddResources" element={<AddResources />}></Route>
            <Route path="/GetResources" element={<GetAllResources />}></Route>
            <Route
              path="/AdminGetResources"
              element={<AdminGetResources />}
            ></Route>

            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
