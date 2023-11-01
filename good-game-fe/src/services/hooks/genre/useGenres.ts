import {useQuery} from "@tanstack/react-query";
import GameController, {Game} from "../../GameController";
import {CACHE_KEY_GAMES} from "../constants";


const useGames = () => {
    return useQuery<Game[], Error>({
        queryKey: CACHE_KEY_GAMES,
        queryFn: GameController.getAllGames
    })
}

export default useGames;