import {useMutation, useQuery} from "@tanstack/react-query";
import APIClient from "./APIClient";

interface Game {
    id: bigint,
    name: string,
    genre: string,
    description: string,
    platform:string,
}

const apiClient = new APIClient<Game>("/games");

class GameController{
    getAllGames = () => {
        return useQuery<Game[], Error>({
            queryKey: ['games'],
            queryFn: apiClient.getAll
        })
    }
}

export default new GameController;