import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../services/hooks/game/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


const GameGrid = () => {
    const {data:games, error, isLoading} = useGames();

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