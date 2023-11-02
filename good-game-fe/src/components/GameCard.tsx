import {Game} from "../services/GameController";
import {Card, CardBody, Heading, Image, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import noImage from "../assets/no-image-placeholder.webp";

export interface Props {
    game: Game
}

const GameCard = ({game} :Props) =>{

    return(
        <Card borderRadius={10} overflow='hidden'>
            {game.background_image ? <Image src={game.background_image} /> : <Image src={noImage} />}
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIconList platforms={game.platforms}/>
            </CardBody>
        </Card>
    );
}

export default GameCard;