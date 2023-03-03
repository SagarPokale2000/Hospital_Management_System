import { MYAXIOIS, PrivateAxios } from "../Axios/AxiosHelper";
import { getCurrentUserDetail } from "../../Authentication/auth";

export const GetAppointmentList = () => {
  const doctor = getCurrentUserDetail().employee.doctor.id;
  return PrivateAxios.get(`/doctor/${doctor}/patients`).then(
    (response) => response.data
  );
};

export const getPatientDetails = (id) =>
{
    return MYAXIOIS.get('/patients/'+id).then((response) => response.data)
}

export const updatePatientStatus = (id, data) =>
{
  return PrivateAxios.put('/patients/'+id, data).then((response) => response.data)
} 
