import RequiredFormEntry from "../components/RequiredFormEntry";
import {Box, StackDivider, VStack} from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import {useState} from "react";

function Login() {
    const [emailTyped, setEmailTyped] = useState(false)
    const [passwordTyped, setPasswordTyped] = useState(false)
    const handleEmailChange = (isError: boolean) => setEmailTyped(isError)
    const handlePasswordChange = (isError: boolean) => setPasswordTyped(isError)

    return (
        <>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
            >
                <Box>
                    <h1>Login</h1>
                </Box>
                <Box>
                    <RequiredFormEntry type='email' label='Email' toDisable={handleEmailChange} />
                    <RequiredFormEntry type='password' label='Password' toDisable={handlePasswordChange} />
                </Box>
                <Box>
                    <Button colorScheme='blue'
                            width='stretch'
                            isDisabled={emailTyped || passwordTyped}
                            onClick={() => console.log(passwordTyped)}>Login</Button>
                </Box>
            </VStack>
        </>
    )
}

export default Login;