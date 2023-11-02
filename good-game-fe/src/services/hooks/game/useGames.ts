import {useQuery} from "@tanstack/react-query";
import GameController, {Game} from "../../GameController";
import {CACHE_KEY_GAMES} from "../constants";
import {Genre} from "../../GenreController";


const useGames = (selectedGenre : Genre|null) => {
    return useQuery<Game[], Error>( {
        queryKey: CACHE_KEY_GAMES,
        queryFn:GameController.getAllGames,
    })
}

export default useGames;