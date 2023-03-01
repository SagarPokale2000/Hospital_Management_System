import { MYAXIOIS, PrivateAxios } from "../Axios/AxiosHelper"

export const loadAllEmployee = () =>
{
    return PrivateAxios.get('employee?pageNumber=0&pageSize=5').then(response => response.data)
}