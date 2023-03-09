import { resolvePath } from "react-router-dom";
import { MYAXIOIS, PrivateAxios } from "../Axios/AxiosHelper";

export const loadAllEmployee = () => {
  return PrivateAxios.get("employee?pageNumber=0&pageSize=5").then(
    (response) => response.data
  );
};

export const loadAllPatient = () => {
  return PrivateAxios.get("patients?pageNumber=0&pageSize=5").then(
    (response) => response.data
  );
};

export const addEmployee = (data, id) => {
  return PrivateAxios.post("employee/create/" + id, data).then(
    (response) => response.data
  );
};

export const addDoctor = (doctor) => {
  return PrivateAxios.post("doctor", doctor).then((response) => response.data);
};

export const getTheEmployee = (id) => {
  return PrivateAxios.get("employee/" + id).then((response) => response.data);
};

export const deleteTheEmployee = (id) =>
{
  return PrivateAxios.delete("employee/" + id).then((response) => response.data);
}