import {useQuery} from "@tanstack/react-query";
import GenreController, {Genre} from "../../GenreController";
import {CACHE_KEY_GENRES} from "../constants";


const useGenres = () => {
    return useQuery<Genre[], Error>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: GenreController.getAllGenres,
        staleTime: 24 * 60 * 60 * 1000, //24h
    })
}

export default useGenres;