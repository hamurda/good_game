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
import useDeleteGame from "../services/hooks/useDeleteGame";
import {Game} from "../services/GameController";
import {useNavigate} from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();
    const {data:games} = useGames();
    const deleteGame = useDeleteGame(()=>{});

    const handleDeleteBtn = (game:Game) => {
        deleteGame.mutate(game);
    }

    const handleAddBtn = () => {
        navigate("/newGame");
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
                                </Tr>
                            </Thead>
                            <Tbody>
                                {games?.map((game, index)=>{
                                    return (
                                        <Tr key={index}>
                                            <Td>{game.name}</Td>
                                            <Td>{game.genre}</Td>
                                            <Td>{game.platform}</Td>
                                            <Td><Button onClick={() => handleDeleteBtn(game)}>Delete</Button></Td>
                                        </Tr>)
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box>
                    <Button onClick={handleAddBtn}>Add New Game</Button>
                </Box>
            </VStack>
        </>
    );
}

export default HomePage;