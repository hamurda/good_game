import APIClient from "./APIClient";

export interface Game {
    id: bigint,
    name: string,
    genre: string,
    description: string,
    platform:string,
}

const apiClient = new APIClient<Game>("/games");

class GameController{
    getAllGames = () => {
        return apiClient.getAll();
    }

    createNewGame = (newGame:Game)  => {
        return apiClient.post(newGame);
    }
}

export default new GameController;