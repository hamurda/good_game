import {
    VStack,
    Box,
    StackDivider,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    TableContainer,
    Button,
    Input
} from '@chakra-ui/react'
import useGames from "../services/hooks/useGames";
import useAddGame from "../services/hooks/useAddGame";


function HomePage() {
    const {data:games} = useGames();
    const hookAddGame = useAddGame(() => {});

    const handleAddBtn = () => {
        hookAddGame.mutate({
            id: 0,
            name: "Graveyard Keeper",
            genre: "Simulation",
            description: "The most inaccurate medieval cemetery management sim.",
            platform: "PC",
        })
    }


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
                <Box>
                    <h2>New Game</h2>
                </Box>
                <Box>
                    <TableContainer>
                        <Table variant='striped' colorScheme='green'>
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Genre</Th>
                                    <Th>Platform</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                               <Tr>
                                   <Td><Input/></Td>
                                   <Td><Input/></Td>
                                   <Td><Input/></Td>
                                   <Td><Button onClick={handleAddBtn}>Add</Button></Td>
                               </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </VStack>
        </>
    );
}

export default HomePage;