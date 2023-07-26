import {useMutation, useQueryClient} from "@tanstack/react-query";
import {User} from "../../UserController";
import UserController from "../../UserController";
import {CACHE_KEY_USERS} from "../constants";


const useAddUser = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<User[], Error, User>({
        mutationFn: UserController.addNewUser,
        onSuccess: (users, newUser) => {
            queryClient.invalidateQueries({
                queryKey:CACHE_KEY_USERS
            })
            onAdd();
        }
    })
}

export default useAddUser;