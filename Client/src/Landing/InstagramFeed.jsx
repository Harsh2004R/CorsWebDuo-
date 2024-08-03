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
            maxW='full' bg='#000' h="auto">
            <WordRotateDemo />
            <Box w='100%' h={{ base: "5vh", md: "10vh", lg: "10vh" }} ></Box>
            <InstaClone />
            <Box w='100%' h={{ base: "5vh", md: "10vh", lg: "10vh" }} ></Box>

            <WordRotate words={["Fan Feedbacks", "& Coments"]} />

            <Box w='100%' h={{ base: "5vh", md: "10vh", lg: "10vh" }} ></Box>
            <MarqueeDemo />
            <Box w='100%' h={{ base: "5vh", md: "10vh", lg: "10vh" }} ></Box>
        </Container>
    )
}

export default InstagramFeed
