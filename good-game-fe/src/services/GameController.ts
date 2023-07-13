import APIClient from "./APIClient";

export interface Game {
    id: number,
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

    addNewGame = (newGame:Game)  => {
        return apiClient.post(newGame);
    }
}

export default new GameController;