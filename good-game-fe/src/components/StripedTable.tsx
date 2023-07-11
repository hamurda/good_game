import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'


interface Game {
    id: bigint,
    name: string,
    genre: string,
    description: string,
    platform:string,
}

interface Props {
    games: Game[],
}

function StripedTable({games}:Props) {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Genre</Th>
                        <Th>Platform</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {games?.map((game, index)=>{
                        return (
                            <Tr key={index}>
                                <Td>{game.name}</Td>
                                <Td>{game.genre}</Td>
                                <Td>{game.platform}</Td>
                            </Tr>)
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default StripedTable;