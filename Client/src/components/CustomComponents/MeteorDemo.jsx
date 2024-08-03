import Meteors from "@/components/magicui/meteors";
import { Box, Text, Flex } from "@chakra-ui/react";

export function MeteorDemo() {
  return (
    <Box
    // border={"1px solid lime"} 
    position={"relative"} h="auto" py="100px" w="100%"  overflow="hidden"
    >
      <Meteors number={20} />

      <Text
       
        bgGradient="linear(to-t, black, gray.300)"
        bgClip="text"
        textAlign="center"
        fontSize={{ base: "8xl", md: "8xl", lg: "150px" }}
        fontWeight="semibold"
        lineHeight="none"
        
      >
        Cors Web Duo
      </Text>


    </Box>
  );
}
