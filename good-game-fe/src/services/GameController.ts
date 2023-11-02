import APIClient from "./APIClient";
import {Genre} from "./GenreController";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number,
    name: string,
    genre: string,
    description: string,
    platform:string,
    background_image: string,
    platforms: Platform[],
}

const apiClient = new APIClient<Game>("/games");

class GameController{
    getAllGames = () => {
        return apiClient.getAll();
    }

    getAllGamesByGenre = (genre: Genre) => {
        apiClient.endpoint.concat("/${genre.id}");
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