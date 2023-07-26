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
import useAddUser from "../services/hooks/user/useAddUser";



const schema = z.object({
    username: z.string().min(3),
    password: z.string().min(3).max(20)
});

type FormData = z.infer<typeof schema>

const NewUser = () => {
    const navigate = useNavigate();
    const hookAddUser = useAddUser(() => {});

    const {
        register,
        handleSubmit ,
        formState ,
    } = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data: FieldValues) => {
        hookAddUser.mutate({
            id: 0,
            username: data.username,
            password: data.password
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
                        <h2>Sign Up</h2>
                    </Box>
                    <Box>
                        <TableContainer>
                            <Table variant='striped' colorScheme='green'>
                                <Thead>
                                    <Tr>
                                        <Th>Username</Th>
                                        <Th>Password</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <FormControl isRequired mb="10px">
                                                <Input {...register("username")}/>
                                            </FormControl>
                                        </Td>
                                        <Td>
                                            <FormControl isRequired mb="10px">
                                                <Input {...register("password")}/>
                                            </FormControl>
                                        </Td>
                                        <Td>
                                            <Button isDisabled={!formState.isValid} type="submit">
                                                Sign Up
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

export default NewUser;