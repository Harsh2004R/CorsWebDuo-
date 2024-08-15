import React from 'react'
import { Center, Text } from '@chakra-ui/react'
const Header = () => {
    return (
        <>
            <Center w="100%" h="auto" py="15px" bg="#000">
                <Text fontWeight={"800"} bgGradient="linear(to-b, black, gray.300)" bgClip="text" fontSize={{ base: "6xl", md: "8xl", lg: "120px" }}>Dashboard</Text>
            </Center>
        </>
    )
}

export default Header;
