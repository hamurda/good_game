import {Game} from "../services/GameController";
import {Card, CardBody, Heading, Image, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

export interface Props {
    game: Game
}

const GameCard = ({game} :Props) =>{

    return(
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIconList platforms={game.platforms}/>

            </CardBody>
        </Card>
    );
}

export default GameCard;