import useGenres from "../services/hooks/genre/useGenres";
import {VStack, Text} from "@chakra-ui/react";

const GenreList = () => {
    const {data:genres} = useGenres();

    return (
        <>
            <VStack>
                {genres?.map((genre)=> (
                    <Text>{genre.name}</Text>
                ))}
            </VStack>
        </>
    )
}

export default GenreList;