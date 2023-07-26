import APIClient from "./APIClient";

export interface User {
    id: number,
    username: string,
    password:string,
}

const apiClient = new APIClient<User>("/signUp");

class UserController{
    getAllUsers = () => {
        return apiClient.getAll();
    }

    addNewUser = (newUser:User)  => {
        return apiClient.post(newUser);
    }

    deleteUser = (user: User) => {
        return apiClient.delete(user.id);
    }
}

export default UserController;