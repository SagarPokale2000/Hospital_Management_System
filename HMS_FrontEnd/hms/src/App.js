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
import PatientAccountList from "./Component/Pages/Accountant/PatientAccountList";
import PatientDashboard from "./Component/Pages/Patient/PatientDashboard";
import DoctorDashboard from "./Component/Pages/Doctor/DoctorDashboard";
import ReceptionistDashboard from "./Component/Pages/Receptionist/ReceptionistDashboard";
import Appointment from "./Component/Pages/Patient/Appointment";
import AppintmentHistory from "./Component/Pages/Patient/AppointmentHistory";
import HealthHistory from "./Component/Pages/Patient/HealthHistory";
import AdminDashboard from "./Component/Pages/Admin/AdminDashboard";
import AllEmployee from "./Component/Pages/Admin/AllEmployee";
import AllPatient from "./Component/Pages/Admin/AllPatient";
import AddEmployee from "./Component/Pages/Admin/AddEmployee";
import RemoveEmployee from "./Component/Pages/Admin/RemoveEmployee";
import AdminGetResources from "./Component/Pages/HospitalResources/AdminGetResources";
import AddResources from "./Component/Pages/HospitalResources/AddResources";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
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
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signUp" element={<Signup />}></Route>
            <Route path="/user" element={<PrivateRoute />}>
            
              <Route path="patient/dashboard" element={<PatientDashboard />}></Route>
              <Route path="patient/appointment" element={<Appointment />}></Route>
              <Route path="patient/appoHistory" element={<AppintmentHistory />}></Route>
              <Route path="patient/healthHistory"element={<HealthHistory />}></Route>
              
              <Route path="admin/dashboard" element={<AdminDashboard />}></Route>
              <Route path="admin/allEmployee" element={<AllEmployee />}></Route>
              <Route path="admin/allPatient" element={<AllPatient />}></Route>
              <Route path="admin/addEmp" element={<AddEmployee />}></Route>
              <Route path="admin/rmEmp" element={<RemoveEmployee />}></Route>
              <Route path="admin/resources" element={<AdminGetResources />}></Route>
              <Route path="admin/addResources" element={<AddResources />}></Route>
            
              <Route path="PatientAccountList"element={<PatientAccountList />}></Route>
              
              {/* <Route path="update/patient/:id" element={<PatientDetails />}></Route> */}
              <Route path="doctor" element={<DoctorDashboard />}></Route>
              <Route path="receptionist" element={<ReceptionistDashboard />}></Route>
              <Route path="accountant" element={<Accountant />}></Route>
              
              
            </Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
