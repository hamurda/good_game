import {Game} from "../services/GameController";
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
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
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.platforms}/>
                </HStack>
                <Heading textAlign={'left'} fontSize='2xl'>{game.name}</Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;