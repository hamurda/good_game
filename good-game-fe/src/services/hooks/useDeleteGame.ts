import {useMutation, useQueryClient} from "@tanstack/react-query";
import GameController, {Game} from "../GameController";
import {CACHE_KEY_GAMES} from "./constants";

const useDeleteGame = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Game[], Error, Game>({
        mutationFn: GameController.deleteGame,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:CACHE_KEY_GAMES
            })
            onAdd();
        }
    })
};

export default useDeleteGame;