import { RESOURCEAXIOS } from "../Axios/AxiosHelper";

export const AddResource = (resource) => {
    return RESOURCEAXIOS.post(`/resources/add`,resource).then((response) => response.data);
}

export const GetAllResources = (resource) => {
    return RESOURCEAXIOS.get("/resources/?pageNumber=0&pageSize=5",resource).then((response) => response.data);
}