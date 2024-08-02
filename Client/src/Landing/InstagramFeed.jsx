import { MarqueeDemo } from "@/components/CustomComponents/MarqueeDemo";
import { WordRotateDemo } from "@/components/CustomComponents/WordRotate";
import { Container, Box } from "@chakra-ui/react";
import React from 'react'
import InstaClone from "./InstaClone";
import WordRotate from "@/components/magicui/word-rotate";

const InstagramFeed = () => {
    return (
        <Container
            // border="1px solid red"
            maxW='full' bg='#000' h="500vh">
            <WordRotateDemo />
            <Box w='100%' h={{ base: "5vh", md: "10", lg: "10" }} ></Box>
            <InstaClone />
            <Box w='100%' h={{ base: "5vh", md: "10", lg: "10" }} ></Box>
            <Box w={{ base: "100%", md: "80%", lg: "90%" }} h="auto" m='auto' bg="#000">
                <WordRotate words={["Fan Feedbacks", "& Coments"]} />
            </Box>
            <Box w='100%' h={{ base: "5vh", md: "10", lg: "10" }} ></Box>
            <MarqueeDemo />


        </Container>
    )
}

export default InstagramFeed
