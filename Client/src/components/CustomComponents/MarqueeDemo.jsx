import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Marquee from "@/components/magicui/marquee";


const reviews = [
    {
        name: "Sheetal",
        username: "@sheetallll._",
        body: "This is beyond amazing. I'm in awe. Fantastic job!",
        img: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_hybrid",
    },
    {
        name: "Riya",
        username: "@travel_with_nature_2",
        body: "I’m truly amazed by this. It’s breathtakingly beautiful. Words can’t do it justice!",
        img: "https://img.freepik.com/premium-photo/cheerful-female-avatar-named-mia-depicted-simplistic-cartoon-style_117038-64860.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_hybrid",
    },
    {
        name: "Diwakar",
        username: "@diwakarr.sharma",
        body: "This is so impressive! I’m at a loss for words. Truly phenomenal work!",
        img: "https://img.freepik.com/premium-photo/3d-rendering-avatar-design_1258715-60589.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_hybrid",
    },
    {
        name: "Deepanshu",
        username: "@_flabber_gasted_",
        body: "Keep doing it we want more contents like this.",
        img: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303087.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_hybrid",
    },
    {
        name: "Divya",
        username: "@_divya_d_17",
        body: "I’m totally floored by this. It’s incredibly impressive.",
        img: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303087.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_hybrid",
    },
    {
        name: "Ratin",
        username: "@ratinhaldarofficial",
        body: "This is simply stunning. I’m in complete awe. Outstanding job!",
        img: "https://img.freepik.com/free-photo/3d-rendering-cartoon-like-boy-ready-adventure_23-2150797558.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_hybrid",
    },
    {
        name: "Himanshu",
        username: "@himanshu78188",
        body: "I can't believe how amazing this is. It's truly stunning. I'm speechless!",
        img: "https://img.freepik.com/premium-photo/3d-cartoon-style-character-boy-created-with-generative-ai_1022026-63390.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_hybrid",
    },
    {
        name: "Pradeep",
        username: "@pradeep_chakrawarti.14",
        body: "This is absolutely incredible. I'm genuinely blown away. Fantastic work!",
        img: "https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-94219.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_hybrid",
    },
    {
        name: "Dhannu",
        username: "@dhannu_69_",
        body: "This is what I wating for from long period of time.",
        img: "https://img.freepik.com/premium-photo/memoji-beautiful-girl-woman-white-background-emoji_826801-6872.jpg?ga=GA1.1.1559264531.1691417508&semt=sph",
    },


];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
    return (
        <Box
            position="relative"
            w="256px"
            cursor="pointer"
            overflow="hidden"
            rounded="xl"
            border="0.5px solid rgba(238,238,238,0.2)"
            p="4"
            bg="rgba(170,170,170,0.2)"

        // _hover={{ bg: "rgba(17, 17, 17, 0.05)" }}
        >
            <Flex flexDirection="row" alignItems="center" gap="2">
                <Image borderRadius="full" w="32px" h="32px" alt="" src={img} />
                <Flex flexDirection="column">
                    <Text fontSize="sm" fontWeight="medium" color="white">
                        {name}
                    </Text>
                    <Text fontSize="xs" fontWeight="medium" color="grey">
                        {username}
                    </Text>
                </Flex>
            </Flex>
            <Text mt="2" fontSize="sm" color="rgba(230,230,230,0.6)">{body}</Text>
        </Box>
    );
};

export function MarqueeDemo() {
    return (
        <Box
            overflow="hidden"
            position="relative"
            display="flex"
            h="auto"
            width={{ base: "100%", md: "65%", lg: "70%" }}
            m="auto"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            rounded="lg"
            shadow={{ md: "xl" }}
        >
            <Marquee pauseOnHover style={{ "--duration": "20s" }}>
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee pauseOnHover style={{ "--duration": "20s", "--gap": "16px" }} reverse>
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Box
                pointerEvents="none"
                position="absolute"
                insetY="0"
                left="0"
                width="33%"
            bgGradient="linear(to-r, rgba(255,255,255,0.3), transparent)"
            />
            <Box
                pointerEvents="none"
                position="absolute"
                insetY="0"
                right="0"
                width="33%"
            bgGradient="linear(to-l, rgba(255,255,255,0.3), transparent)"
            />
        </Box>
    );
}
