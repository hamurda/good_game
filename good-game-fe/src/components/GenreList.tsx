import useGenres from "../services/hooks/genre/useGenres";
import {Image, Button, List, ListItem, HStack, Heading} from "@chakra-ui/react";
import {Genre} from "../services/GenreController";

interface Props{
    onSelectGenre: (genre: Genre) =>void,
    selectedGenre: Genre | null,
}

const GenreList = ({onSelectGenre, selectedGenre} : Props) => {
    const {data:genres} = useGenres();

    return (
        <>
            <Heading textAlign={'left'} fontSize={'2xl'} marginBottom={3}>Genres</Heading>
            <List>
                {genres?.map((genre)=> (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px'
                                   borderRadius={8}
                                   objectFit='cover'
                                   src={genre.background_image} />
                            <Button
                                textAlign={'left'}
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