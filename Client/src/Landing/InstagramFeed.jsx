import { MarqueeDemo } from "@/components/CustomComponents/MarqueeDemo";
import { WordRotateDemo } from "@/components/CustomComponents/WordRotate";
import { Container, Box } from "@chakra-ui/react";
import React from 'react'

const InstagramFeed = () => {
    return (
        <Container
            // border="1px solid red"
            maxW='full' bg='#000' h="500vh">
            <WordRotateDemo />
            <MarqueeDemo />


        </Container>
    )
}

export default InstagramFeed
