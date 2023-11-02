import useGenres from "../services/hooks/genre/useGenres";
import {Image, Button, List, ListItem, HStack} from "@chakra-ui/react";
import {Genre} from "../services/GenreController";

interface Props{
    onSelectGenre: (genre: Genre) =>void,
    selectedGenre: Genre | null,
}

const GenreList = ({onSelectGenre, selectedGenre} : Props) => {
    const {data:genres} = useGenres();

    return (
        <>
            <List>
                {genres?.map((genre)=> (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} src={genre.background_image} />
                            <Button
                                onClick={() => onSelectGenre(genre)}
                                variant='link'
                                fontSize='lg'
                                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                            >{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList;