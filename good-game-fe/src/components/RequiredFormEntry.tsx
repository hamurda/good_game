import {FormControl, FormLabel, FormErrorMessage, Input} from '@chakra-ui/react'
import {useState} from "react";

interface Props {
    label: string,
    type: string,
    toDisable: (isError: boolean) => void
}

function RequiredFormEntry({label, type, toDisable}:Props) {
    const [input, setInput] = useState('')
    const handleInputChange = (e: any) => setInput(e.target.value)
    const isError = input === ''
    toDisable(isError)

    return (
        <FormControl isInvalid={isError}>
            <FormLabel>{label}</FormLabel>
            <Input type={type} value={input} onChange={handleInputChange} />
            {(isError && <FormErrorMessage>{label} is required.</FormErrorMessage>)}
        </FormControl>
    )

}

export default RequiredFormEntry;