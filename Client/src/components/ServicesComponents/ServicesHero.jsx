import React from 'react';
import globe from "../Images/globe.jpg"
import { Box, Image, } from '@chakra-ui/react';

const ServicesHero = () => {
    return (
        <>
            <Box m="auto" w={{ base: "100%", md: "90%", lg: "86%" }} h={{ base: "50vh", md: "85vh", lg: "80vh" }} overflow={"hidden"}>
                <Box w="100%" display={"flex"} position={"relative"} alignItems={"center"} h="100%">
                    <div className="flex">
                        <Box display={"flex"} alignItems={"center"}>
                            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                <Image
                                    position="absolute"
                                    left='50%'
                                    transform="translateX(-50%)"
                                    borderRadius={"50%"}
                                    aspectRatio={"1"}
                                    w={{ base: "300px", md: "330px", lg: "500px" }}
                                    h={{ base: "300px", md: "330px", lg: "500px" }}
                                    loading="lazy"
                                    src={globe}
                                    alt=""
                                />
                            </Box>
                            <Box
                                pos={"absolute"}
                                left={"50%"}
                                transform="translateX(-50%)"
                                willChange={"transform"}
                                whiteSpace={"nowrap"}
                                fontWeight={"500"}
                                fontStyle={"normal"}
                                fontSize={"8xl"}
                                mixBlendMode={"difference"}
                                padding={"0px 100%"}
                                animation="marquee 9s linear infinite"
                                color='#fff'
                            >
                                 – CorsWebDuo, Your Local Partner for Expert Web Development!
                            </Box>
                        </Box>

                    </div>
                </Box>

                <style jsx global>{`
                @keyframes marquee {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(-100%, 0, 0);
                    }
                }
            `}</style>
            </Box >
        </>

    )

};

export default ServicesHero;
