import { RESOURCEAXIOS } from "../Axios/AxiosHelper";

export const AddResource = (resource) => {
    return RESOURCEAXIOS.post(`/resources/add`,resource).then((response) => response.data);
}

export const UpdateResources = (data, id) => {
    return RESOURCEAXIOS.put(`/resources/`+id,data).then((response) => response.data);
}

export const GetAllResources = (resource) => {
    return RESOURCEAXIOS.get("/resources?pageNumber=0&pageSize=10",resource).then((response) => response.data);
}