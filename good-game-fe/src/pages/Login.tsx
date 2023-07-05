import { FieldValues, useForm} from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {Box, StackDivider, VStack, Button, FormLabel, Input, FormControl} from "@chakra-ui/react";


const schema = z.object({
    username: z.string().min(3),
    password: z.string().min(3).max(20)
});

type FormData = z.infer<typeof schema>

const Login = () => {
    const {
        register,
        handleSubmit ,
        formState ,
    } = useForm<FormData>({resolver: zodResolver(schema)});
    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'>
                    <Box>
                        <FormControl isRequired mb="10px">
                            <FormLabel>Username</FormLabel>
                            <Input {...register("username")}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input {...register("password")} type="password"/>
                        </FormControl>
                    </Box>
                    <Button isDisabled={!formState.isValid} type="submit" colorScheme="teal" >Login</Button>
                </VStack>
            </form>
        </>

    );
}

export default Login;