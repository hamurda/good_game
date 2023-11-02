import {useQuery} from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS} from "../constants";
import PlatformController, {Platform} from "../../PlatformController";


const usePlatforms = () => {
    return useQuery<Platform[], Error>({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: PlatformController.getAllPlatforms
    })
}

export default usePlatforms;