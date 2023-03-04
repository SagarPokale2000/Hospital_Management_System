import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Component/Home/Home";
import Login from "./Component/Pages/Login/Login";
import Signup from "./Component/Pages/Login/Signup";
import UserProvider from "./Context/UserProvider";
import { ToastContainer, toast } from "react-toastify";
import Patient from "./Component/Pages/Patient/Patient";
import AddAppoinment from "./Component/Pages/Patient/AddAppointment";
import HealthHistory from "./Component/Pages/Patient/HealthHistory";
import PrivateRoute from "./Component/Base/PrivateRoute";
import Accountant from "./Component/Pages/Accountant/Accountant";
import Doctor from "./Component/Pages/Doctor/Doctor";
import AdminDashboard from "./Component/Pages/Admin/AdminDashboard";
import SideNavBar from "./Component/CustomeNavBar/Admin/SideNavBar";
import AppointPatientList from "./Component/Pages/Doctor/AppointPatientList";
import PatientDetails from "./Component/Pages/Doctor/PatientDetails";
import Admin from "./Component/CustomeNavBar/Admin/SideNavBar";
import AddResources from "./Component/Pages/HospitalResources/AddResources";
import { GetAllResources } from "./ServerCall/HospitalResources/Resources";
import AdminGetResources from "./Component/Pages/HospitalResources/AdminGetResources";
import UpdateResource from "./Component/Pages/HospitalResources/UpdateResource";
import AppintmentHistory from "./Component/Pages/Patient/AppointmentHistory";

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
              
             
              <Route path="AddAppoinment" element={<AddAppoinment />}></Route>
              <Route path="HealthHistory" element={<HealthHistory />}></Route>
              <Route path="AppintmentHistory" element={<AppintmentHistory />}></Route>
              
              <Route path="doctor" element={<AppointPatientList />}></Route>
              <Route path="receptionist" element={<Patient />}></Route>
              <Route path="accountant" element={<Accountant />}></Route>
              <Route path="admin" element={<Admin />}></Route>

              

              <Route path="update/patient/:id" element={<PatientDetails />}></Route>
            </Route>
            <Route path="/AddResources" element={<AddResources />}></Route>
            <Route path="/GetResources" element={<GetAllResources />}></Route>
            <Route path="/AdminGetResources" element={<AdminGetResources />}></Route>
            <Route path="/UpdateResource" element={<UpdateResource />}></Route>
            <Route path="/" element={<Home />}></Route> 
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;