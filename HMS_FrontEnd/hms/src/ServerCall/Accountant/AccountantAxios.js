import { resolvePath } from "react-router-dom";
import { MYAXIOIS, PrivateAxios } from "../Axios/AxiosHelper";

export const GetPatientForAccountant = () => {
  return PrivateAxios.get("appointment/patients?pageNumber=0&pageSize=10").then(
    (response) => response.data
  );
};
