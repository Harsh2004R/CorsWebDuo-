import { Center, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    return (
        <>
            <Center w="100%" h="auto" py="15px" bg="#000">
                <Text fontWeight={"800"} bgGradient="linear(to-b, black, gray.300)" bgClip="text" fontSize={{ base: "6xl", md: "8xl", lg: "120px" }}>Contact us</Text>
            </Center>
        </>
    )
}

export default Header
