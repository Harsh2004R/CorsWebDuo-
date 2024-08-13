import React from 'react'
import "./Projects.scss"
import { AspectRatio, Box, Text } from '@chakra-ui/react'
import site1 from "../Videos/Site1.mp4"
import site2 from "../Videos/Site2.mp4"
import site3 from "../Videos/Site3.mp4"
import site4 from "../Videos/Site4.mp4"
import site5 from "../Videos/Site5.mp4"
const Projects = () => {
    return (
        <>
            <Box
                // border={"1px solid blue"}
                bg="#000" pb="50px" w="100%" h="auto">
                <Box w="100%" h="auto" py="10" display={"flex"} justifyContent={"center"} >
                    <Text color="#fff" fontSize={{ base: "2xl", md: "3xl", lg: "45px" }} fontWeight={"800"}>Already Served</Text>
                </Box>
                <Box className="grid-container">
                    <Box className="grid-item">
                        <AspectRatio ratio={16 / 9} borderRadius={"md"} w="100%" h="100%">
                            <Box transition="transform 0.5s ease" filter="brightness(0.8) contrast(1.2)" _hover={{ filter: "brightness(1) contrast(0.8)", transform: "rotateX(10deg) rotateY(10deg) scale(1.02)", cursor: "pointer" }} as="video" src={site1} autoPlay muted loop w="100%" h="100%" borderRadius="1em" objectFit="cover" />
                        </AspectRatio>
                    </Box>
                    <Box className="grid-item">
                        <AspectRatio ratio={16 / 9} w="100%" h="100%">
                            <Box transition="transform 0.5s ease" as="video" src={site2} filter="brightness(0.8) contrast(1.2)" _hover={{ filter: "brightness(1) contrast(0.8)", transform: "rotateX(10deg) rotateY(10deg) scale(1.02)", cursor: "pointer" }} autoPlay muted loop w="100%" h="100%" borderRadius="1em" objectFit="cover" />
                        </AspectRatio>
                    </Box>
                    <Box className="grid-item">
                        <AspectRatio ratio={16 / 9} w="100%" h="100%">
                            <Box transition="transform 0.5s ease" as="video" src={site3} filter="brightness(0.8) contrast(1.2)" _hover={{ filter: "brightness(1) contrast(0.8)", transform: "rotateX(10deg) rotateY(10deg) scale(1.02)", cursor: "pointer" }} autoPlay muted loop w="100%" h="100%" borderRadius="1em" objectFit="cover" />
                        </AspectRatio>
                    </Box>
                    <Box className="grid-item">
                        <AspectRatio ratio={16 / 9} w="100%" h="100%">
                            <Box transition="transform 1.3s ease" as="video" src={site5} filter="brightness(0.8) contrast(1.2)" _hover={{ filter: "brightness(1) contrast(0.8)", transform: "rotateX(20deg) rotateY(10deg) scale(1.02)", cursor: "pointer" }} autoPlay muted loop w="100%" h="100%" borderRadius="1em" objectFit="cover" />
                        </AspectRatio>
                    </Box>
                    <Box className="grid-item">
                        <AspectRatio ratio={16 / 9} w="100%" h="100%">
                            <Box transition="transform 2s ease" as="video" src={site4} filter="brightness(0.8) contrast(0.8)" _hover={{ filter: "brightness(1) contrast(1.2)", transform: "rotateX(10deg) rotateY(50deg) scale(1.02)", cursor: "pointer" }} autoPlay muted loop w="100%" h="100%" borderRadius="1em" objectFit="cover" />
                        </AspectRatio>
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default Projects
