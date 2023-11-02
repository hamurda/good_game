import { Button, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms from "../services/hooks/platform/usePlatforms";

const PlatformSelector = () => {
    const {data: platforms, error} = usePlatforms();

    if(!platforms || error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platform</MenuButton>
            <MenuList>
                {platforms.map(platform =>
                    <MenuItem key={platform.id}>{platform.name}</MenuItem>
                )}
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;