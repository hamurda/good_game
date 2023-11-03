import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../services/hooks/game/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {GameQuery} from "../App";

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({gameQuery}:Props) => {
    const {data, error, isLoading} = useGames();
    let games = data

    if(gameQuery.genre){
        games = games?.filter(game => game.genres?.find(({id}) => id === gameQuery.genre?.id));
    }

    if(gameQuery.platform){
        games = games?.filter(game => game.platforms?.find(({id}) => id === gameQuery.platform?.id));
    }

    if(error) return <Text textAlign='left' fontSize='3xl'>{error.message}</Text>
    const skeletons = [1,2,3,4,5,6];

    return (
        <>
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={6} padding='10px'>
                {isLoading &&
                skeletons.map((skeleton) => (
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton}/>
                    </GameCardContainer>
                    ))}
                {games?.map((game)=> (
                    <GameCardContainer>
                        <GameCard game={game} key={game.id} />
                    </GameCardContainer>
                    ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;