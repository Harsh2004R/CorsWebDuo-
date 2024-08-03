"use client";

import React, { forwardRef, useRef } from "react";
import { Box, Center, Flex, useToken } from "@chakra-ui/react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef(
    ({ className, children, imageUrl }, ref) => {
        const shadow = useToken("shadows", "md");
        return (
            <Box
                ref={ref}
                zIndex="10"
                display="flex"
                height={{ base: "5rem", md: "8rem", lg: "11rem" }}
                width={{ base: "5rem", md: "8rem", lg: "11rem" }}
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
                borderWidth="5px"
                bg="white"
                boxShadow={shadow}
                className={className}
            >
                {imageUrl ? (
                    <img src={imageUrl} alt="Profile" style={{ borderRadius: "50%", height: "100%", width: "100%" }} />
                ) : (
                    children
                )}
            </Box>
        );
    }
);

export function AnimatedBeamDemo() {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);

    return (
        <Center
            maxW={"full"} h={{ base: "auto", md: "auto", lg: "auto" }}
            py="100px"
        // border="1px solid green"
        >
            <Flex
                // border={"1px solid red"}
                ref={containerRef}
                position="relative"
                w={{ base: "100%", md: "80%", lg: "70%" }}
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
                borderRadius="lg"
                // borderWidth="1px"
                bg="#000"
                px={{ base: "2", md: "8", lg: "10" }}
                boxShadow="xl"
            >
                <Flex h="full" w="full" direction="column" alignItems="stretch" justifyContent="space-between" gap="10">
                    <Flex direction="row" justifyContent="space-between">
                        <Circle ref={div1Ref} imageUrl="https://avatars.githubusercontent.com/u/115461808?v=4">
                            {/* Optional: fallback content */}
                        </Circle>
                        <Circle ref={div2Ref} imageUrl="https://avatars.githubusercontent.com/u/112754638?v=4">
                            {/* Optional: fallback content */}
                        </Circle>
                    </Flex>
                </Flex>

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div2Ref}
                    startYOffset={10}
                    endYOffset={10}
                    curvature={-20}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div2Ref}
                    startYOffset={-10}
                    endYOffset={-10}
                    curvature={20}
                    reverse
                />
            </Flex>
        </Center>
    );
}
