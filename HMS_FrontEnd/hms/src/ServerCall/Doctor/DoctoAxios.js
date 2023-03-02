import {MYAXIOIS, PrivateAxios } from "../Axios/AxiosHelper";

export const GetAppointmentList = (patient) => {
    return PrivateAxios.get(`/doctor/${JSON.parse(localStorage.data).doctor.id}/patients`,patient).then((response) => response.data);
}