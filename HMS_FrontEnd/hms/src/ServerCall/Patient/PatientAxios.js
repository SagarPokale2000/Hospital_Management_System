import { MYAXIOIS } from "../Axios/AxiosHelper"
import { PrivateAxios } from "../Axios/AxiosHelper";
export const AddAppoinment = (patient) => {
    return PrivateAxios.post(`/patients/${JSON.parse(localStorage.data).user.patient.id}/healthHistory`,patient).then((response) => response.data);
}

export const GetAllHealthHistory = (patient) => {
    return PrivateAxios.get(`/patient/${JSON.parse(localStorage.data).user.patient.id}/healthhistory`,patient).then((response) => response.data);
}

export const GetAllAppintmentHistory =(patient) => {
    return PrivateAxios.get(`/patient/${JSON.parse(localStorage.data).user.patient.id}/appointmenthistory`,patient).then((response) => response.data);
}