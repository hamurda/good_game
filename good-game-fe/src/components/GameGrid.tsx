import {Button, SimpleGrid, Td, Tr} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import useGames from "../services/hooks/game/useGames";
import useDeleteGame from "../services/hooks/game/useDeleteGame";
import {Game} from "../services/GameController";
import GameCard from "./GameCard";

const GameGrid = () => {
    const navigate = useNavigate();
    const {data:games} = useGames();
    const deleteGame = useDeleteGame(()=>{});

    const handleDeleteBtn = (game:Game) => {
        deleteGame.mutate(game);
    }

    const handleAddBtn = () => {
        navigate("/newGame");
    }

    return (
        <>
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={5} padding='10px'>
                {games?.map((game)=> (
                    <GameCard game={game} />
                    ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;