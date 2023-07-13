import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080/api'
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint:string) {
        this.endpoint = endpoint;
    }

    getAll = () => {
        return axiosInstance
            .get<T[]>(this.endpoint)
            .then(res=>res.data)
    }

    post = (data: T) => {
        return axiosInstance
            .post<T[]>(this.endpoint, data)
            .then(res=>res.data)
    }

    delete = (id:number) => {
        return axiosInstance
            .delete<T[]>(this.endpoint+"/" + id.toString())
            .then(res=>res.data)
    }
}

export default APIClient;