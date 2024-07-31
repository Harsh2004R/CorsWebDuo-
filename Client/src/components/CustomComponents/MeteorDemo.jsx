import Meteors from "@/components/magicui/meteors";
import { Box, Text } from "@chakra-ui/react";

export function MeteorDemo() {
  return (
    <Box
      position={"relative"}  h="auto" py="100px"  w="auto"
      className="flex flex-col items-center justify-center rounded-lg  bg-background md:shadow-xl"
     overflow="hidden"
    >
      <Meteors number={30} />
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
