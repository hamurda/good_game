import APIClient from "./APIClient";

export interface User {
    id: number,
    username: string,
    password:string,
}

const apiClient = new APIClient<User>("/users");

class UserController{
    getAllUsers = () => {
        return apiClient.getAll();
    }

    getUser = ( user:User ) => {
        return apiClient.get(user.id);
    }

    addNewUser = (newUser:User)  => {
        return apiClient.post(newUser);
    }

    deleteUser = (user: User) => {
        return apiClient.delete(user.id);
    }
}

export default new UserController;