import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import {SiNintendo, BsGlobe, MdPhoneIphone} from "react-icons/all";
import {Platform} from "../services/GameController";
import {Icon, HStack} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface Props {
    platforms: Platform[],
}

const PlatformIconList = ({platforms} :Props) => {
    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac:FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    }
    return (
        <HStack marginY={1}>
            {platforms.map(platform => (
                <Icon as={iconMap[platform.slug]} color='gray.500'/>
                )
            )}
        </HStack>
    )
}

export default PlatformIconList;