import useGenres from "../services/hooks/genre/useGenres";
import {Image, Text, List, ListItem, HStack} from "@chakra-ui/react";

const GenreList = () => {
    const {data:genres} = useGenres();

    return (
        <>
            <List>
                {genres?.map((genre)=> (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} src={genre.background_image} />
                            <Text fontSize='lg' >{genre.name}</Text>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList;