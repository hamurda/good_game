import {SimpleGrid} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import useGames from "../services/hooks/game/useGames";
import useDeleteGame from "../services/hooks/game/useDeleteGame";
import {Game} from "../services/GameController";
import GameCard from "./GameCard";
import {GameQuery} from "../App";

interface Props {
    gameQuery: GameQuery,
}

const GameGrid = ({gameQuery}:Props) => {
    const navigate = useNavigate();
    const {data:games} = useGames(gameQuery.genre);
    const deleteGame = useDeleteGame(()=>{});

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