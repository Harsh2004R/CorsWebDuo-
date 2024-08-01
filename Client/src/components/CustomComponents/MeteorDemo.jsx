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
        pointerEvents="none"
        whiteSpace="pre-wrap"
        bgGradient="linear(to-b, black, gray.300)"
        bgClip="text"
        textAlign="center"
        fontSize={{ base: "6xl", md: "7xl", lg: "8xl" }}
        fontWeight="semibold"
        lineHeight="none"
        textColor="transparent"
        dark={{
          from: "white",
          to: "slate.900/10",
        }}
      >
        Cors Web Duo
      </Text>


    </Box>
  );
}
