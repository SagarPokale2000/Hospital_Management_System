import { MYAXIOIS } from "../Axios/AxiosHelper"
import { PrivateAxios } from "../Axios/AxiosHelper";


export const GetAllAppointmentList = () => {
    return PrivateAxios.get("/receptionist/patients?pageNumber=0&pageSize=100").then((response) => response.data);
}

export const PostAllAppointedDoctors = (doctor) => {
    return PrivateAxios.post("/patients/{patientId}/doctor/{doctorId}",doctor).then((response) => response.data);
}
