import APIClient from "./APIClient";
import {renderToReadableStream} from "react-dom/server";

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

    deleteGame = (game: Game) => {
        return apiClient.delete(game.id);
    }
}

export default new GameController;