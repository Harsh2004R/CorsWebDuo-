'use client';

import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: '""',
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}
        >
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}
        >
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({ src, name, title }) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600} color="#1E88E5" textShadow="0px 2px 9px #FAFAFA">{name}</Text>
                <Text fontSize={'sm'} color="#1E88E5">
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};


export default function WithSpeechBubbles() {
    return (
        <Box bg={"#000"}>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading bgGradient="linear(to-b, #666666, gray.300)" bgClip="text">Team Dynamics</Heading>
                    <Text fontWeight={"bold"} bgGradient="linear(to-t, #666666, gray.300)" bgClip="text" textAlign={"center"}>( We have been working with clients around the world )</Text>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Sr. Full Stack Dev</TestimonialHeading>
                            {/* <Text textAlign={"left"} fontSize={{base:"12px",md:"13px",lg:"14px"}} color='#2196F3'>- Harsh Sharma</Text> */}
                            <TestimonialText>
                                I am Harsh, a senior full stack developer, graduate from <Text as="span" color="#F44336" fontWeight={"bold"}> Masai School</Text>.
                                As the founder of CorsWebDuo Coding Agency, I lead a team focused on
                                delivering top-notch web development solutions.

                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://avatars.githubusercontent.com/u/115461808?v=4'
                            }
                            name={'Harsh Sharma'}
                        // title={""}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Marketing | Service</TestimonialHeading>
                            {/* <Text textAlign={"left"} fontSize={{base:"12px",md:"13px",lg:"14px"}} color='#2196F3'>- Deepanshu Joshi</Text> */}
                            <TestimonialText>
                                Deepanshu Joshi(CMO) leads the product marketing department at CorsWebDuo. He excels at acquiring
                                clients through effective social media strategies. His innovative approach ensures
                                our services reach a wide and engaged audience.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://avatars.githubusercontent.com/u/128475017?s=80&v=4'
                            }
                            name={'Deepanshu Joshi'}
                        // title={""}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Sr. Full Stack Dev</TestimonialHeading>
                            {/* <Text textAlign={"left"} fontSize={{base:"12px",md:"13px",lg:"14px"}} color='#2196F3'>- Diwakar Sharma</Text> */}
                            <TestimonialText>
                                Diwakar Sharma, a senior full stack developer, graduate from
                                <Text as="span" color="#F44336" fontWeight={"bold"}> Masai School</Text>.
                                As the Senior Developer at CorsWebDuo Coding Agency, I lead efforts to build fully-fledged applications along with my team.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://avatars.githubusercontent.com/u/112754638?v=4'
                            }
                            name={'Diwakar Sharma'}
                        // title={""}
                        />
                    </Testimonial>

                </Stack>
            </Container>
        </Box>
    )
}

