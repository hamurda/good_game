import { Button, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms from "../services/hooks/platform/usePlatforms";
import { Platform } from "../services/PlatformController";


interface Props{
    onSelectPlatfrom: (platform: Platform) =>void,
    selectedPlatfrom: Platform | null,
}

const PlatformSelector = ({onSelectPlatfrom, selectedPlatfrom} : Props) => {
    const {data: platforms, error} = usePlatforms();

    if(!platforms || error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platform</MenuButton>
            <MenuList>
                {platforms.map(platform =>
                    <MenuItem onClick={() => onSelectPlatfrom(platform)} key={platform.id}>{platform.name}</MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;