import WordRotate from "@/components/magicui/word-rotate";
import { Box } from "@chakra-ui/react";

export function WordRotateDemo() {
    return (
        <>

            <Box  w={{ base: "100%", md: "80%", lg: "90%" }} h="auto" m='auto' bg="#000">
                <WordRotate words={["Instagram Feed", "Just check Out"]} />
            </Box>

        </>

    );
}
