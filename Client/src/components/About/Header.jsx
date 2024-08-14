import React from 'react'
import { Box, Center, Text } from "@chakra-ui/react"
const Header = () => {
    return (
        <div>
            <Center w="100%" h="auto" py="15px" bg="#000">
                <Text fontWeight={"800"} bgGradient="linear(to-b, black, gray.300)" bgClip="text" fontSize={{ base: "7xl", md: "8xl", lg: "120px" }}>About us</Text>
            </Center>

        </div>
    )
}

export default Header
