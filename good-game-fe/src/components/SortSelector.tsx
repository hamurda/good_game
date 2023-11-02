import { Button, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

interface Props {
    sortOrder: string,
    onSelectSortOrder: (sortOrder: string) => void,
}

const SortSelector = ({onSelectSortOrder, sortOrder} : Props) => {
    const sortOrders = [
        {value:'', label:'Relevance'},
        {value:'-', label:'Date added'},
        {value:'name', label:'Name'},
        {value:'-released', label:'Release Date'},
        {value:'-metacritic', label:'Popularity'},
        {value:'-rating', label:'Average rating'},
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map(order =>
                    <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default SortSelector;