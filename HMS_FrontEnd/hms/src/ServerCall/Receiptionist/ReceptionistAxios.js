import { MYAXIOIS } from "../Axios/AxiosHelper"
import { PrivateAxios } from "../Axios/AxiosHelper";


export const GetAllAppointmentList = (patient) => {
    return PrivateAxios.get("/receptionist/patient?pageNumber=0&pageSize=5",patient).then((response) => response.data);
}



export const PostAllAppointedDoctors = (doctor) => {
    return PrivateAxios.post("/patients/{patientId}/doctor/{doctorId}",doctor).then((response) => response.data);
}
