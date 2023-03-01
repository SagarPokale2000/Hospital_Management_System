import { MYAXIOIS } from "../Axios/AxiosHelper"


export const singup = (user) => {

    return MYAXIOIS.post('/patients', user).then((response) => response.data)
    
}


export const loginUser = (loginDetails) => {
    // debugger
    return MYAXIOIS.post('/v1/auth/login', loginDetails).then((response) => response.data)
}