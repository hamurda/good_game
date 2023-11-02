import {SimpleGrid, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import useGames from "../services/hooks/game/useGames";
import useDeleteGame from "../services/hooks/game/useDeleteGame";
import {Game} from "../services/GameController";
import GameCard from "./GameCard";


const GameGrid = () => {
    const navigate = useNavigate();
    const {data:games, error} = useGames();
    const deleteGame = useDeleteGame(()=>{});

    if(error) return <Text textAlign='left' fontSize='3xl'>{error.message}</Text>

    const handleDeleteBtn = (game:Game) => {
        deleteGame.mutate(game);
    }

    const handleAddBtn = () => {
        navigate("/newGame");
    }

    return (
        <>
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={6} padding='10px'>
                {games?.map((game)=> (
                    <GameCard game={game} key={game.id} />
                    ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;