import StripedTable from "../components/StripedTable";
import {VStack, Box, StackDivider } from '@chakra-ui/react'

function HomePage() {
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
                    <StripedTable/>
                </Box>
            </VStack>
        </>
    );
}

export default HomePage;