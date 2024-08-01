import { BorderBeam } from "@/components/magicui/border-beam";
import { Box, Text } from "@chakra-ui/react";

export function BorderBeamDemo() {
    return (
        <Box
            overflow="hidden"
            w={{base:"100%",md:"65%",lg:"60%"}}
            h="auto"
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="lg"
            // border="0.5px solid #424242"
            bg="#000" m="auto"
            shadow={{ md: "xl" }}
        >
            <Text
                pointerEvents="none"
                whiteSpace="pre-wrap"
                textAlign="justify"
                py="10"
               px={{base:"2",md:"10"}}
                fontSize={{ base: "16px", md: "25px" }}
                fontWeight="semibold"
                bgGradient="linear(to-t, black, gray.300)"
                bgClip="text"

            >
                At our platform, we transform your digital dreams into reality. Whether you need a sleek
                personal website, a robust e-commerce platform, or a dynamic web application, our
                expert team is here to deliver cutting-edge solutions tailored to your needs.
            </Text>
            <BorderBeam size={250} duration={12} delay={9} />
        </Box >

    );
}
