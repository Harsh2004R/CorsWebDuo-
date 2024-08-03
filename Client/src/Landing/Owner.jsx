import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import { AnimatedBeamDemo } from '@/components/CustomComponents/AnimatedBeamDemo'
const Owner = () => {
    return (
        <>
            <Container
                // border="1px solid red"
                maxW='full' bg='#000' h="1000vh"
            >

                {/* Owner section Heading here.... */}
                <Text

                    bgGradient="linear(to-t, black, gray.300)"
                    bgClip="text"
                    textAlign="center"
                    fontSize={{ base: "6xl", md: "7xl", lg: "8xl" }}
                    fontWeight="semibold"
                    lineHeight="none"

                >
                    The Faces Behind
                </Text>

                <AnimatedBeamDemo />



            </Container>

        </>
    )
}

export default Owner
