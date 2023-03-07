import { MYAXIOIS } from "../Axios/AxiosHelper";
import { PrivateAxios } from "../Axios/AxiosHelper";

export const GetAllAppointmentList = () => {
  console.log("Inside the Receptionist Call");
  return PrivateAxios.get("/receptionist/patients?pageNumber=0&pageSize=100")
  .then((response) => response.data);
};

export const PostAllAppointedDoctors = (doctor) => {
  return PrivateAxios.post(
    "/patients/{patientId}/doctor/{doctorId}",
    doctor
  ).then((response) => response.data);
};

export const GetPatientForAdmit = () => {
  return PrivateAxios.get(
    "receptionist/patients/admit?pageNumber=0&pageSize=10"
  ).then((response) => response.data);
};
