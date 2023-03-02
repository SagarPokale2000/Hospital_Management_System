import { MYAXIOIS } from "../Axios/AxiosHelper"
import { PrivateAxios } from "../Axios/AxiosHelper";
export const AddAppoinment = (patient) => {
    return PrivateAxios.post(`/patients/${JSON.parse(localStorage.data).user.patient.id}/healthHistory`,patient).then((response) => response.data);
}

export const healthHistory = (patient) => {
    return PrivateAxios.get(`/patients/${JSON.parse(localStorage.data).user.patient.id}/healthHistory`,patient).then((response) => response.data);
}

