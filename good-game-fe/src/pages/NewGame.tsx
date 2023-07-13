import { FieldValues, useForm} from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Box,
    StackDivider,
    VStack,
    Button,
    Input,
    FormControl,
    Table,
    Thead,
    Tr,
    Th,
    Tbody, Td, TableContainer
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import useAddGame from "../services/hooks/useAddGame";


const schema = z.object({
    name: z.string().min(1),
    genre: z.string().min(1),
    description: z.string().min(1),
    platform: z.string().min(3).max(20)
});

type FormData = z.infer<typeof schema>

const NewGame = () => {
    const navigate = useNavigate();
    const hookAddGame = useAddGame(() => {});

    const {
        register,
        handleSubmit ,
        formState ,
    } = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data: FieldValues) => {
        hookAddGame.mutate({
            id: 0,
            name: data.name,
            genre: data.genre,
            description: data.description,
            platform: data.platform,
        })
        navigate('/');
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'>
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
                                        <Th>Description</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <FormControl isRequired mb="10px">
                                            <Input {...register("name")}/>
                                            </FormControl>
                                        </Td>
                                        <Td>
                                            <FormControl isRequired mb="10px">
                                                <Input {...register("genre")}/>
                                            </FormControl>
                                        </Td>
                                        <Td>
                                            <FormControl isRequired mb="10px">
                                                <Input {...register("platform")}/>
                                            </FormControl>
                                        </Td>
                                        <Td>
                                            <FormControl isRequired mb="10px">
                                                <Input {...register("description")}/>
                                            </FormControl>
                                        </Td>
                                        <Td>
                                            <Button isDisabled={!formState.isValid} type="submit">
                                                Add
                                            </Button>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </VStack>
            </form>
        </>

    );
}

export default NewGame;