import IconCloud from "@/components/magicui/icon-cloud";
import { Box, Flex } from "@chakra-ui/react";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <Box
      // border="1px solid lime"
      position="relative"
      display="flex"
      h="auto"
      // maxW="32rem"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      // borderRadius="lg"
      bg="#000"
      px="20"
      pb="20"
      pt="8"
    >
      <IconCloud iconSlugs={slugs} />
    </Box>
  );
}
