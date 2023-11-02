import { Button, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: Relevance</MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector;