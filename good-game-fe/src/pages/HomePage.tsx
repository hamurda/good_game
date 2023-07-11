import StripedTable from "../components/StripedTable";
import {VStack, Box, StackDivider, Table, Thead, Tr, Th, Tbody, Td, TableContainer, Button} from '@chakra-ui/react'
import GameController from "../services/GameController"


function HomePage() {
    const {data:games} = GameController.getAllGames();

    return (
        <>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
            >
                <Box>
                    <h1>Dashboard</h1>
                </Box>
                <Box>
                    <TableContainer>
                        <Table variant='striped' colorScheme='teal'>
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Genre</Th>
                                    <Th>Platform</Th>
                                    <Th></Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {games?.map((game, index)=>{
                                    return (
                                        <Tr key={index}>
                                            <Td>{game.name}</Td>
                                            <Td>{game.genre}</Td>
                                            <Td>{game.platform}</Td>
                                            <Td><Button>Update</Button></Td>
                                            <Td><Button>Delete</Button></Td>
                                        </Tr>)
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </VStack>
        </>
    );
}

export default HomePage;