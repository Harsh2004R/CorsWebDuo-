import React from 'react';
import { Box, Heading, Text, Grid } from '@chakra-ui/react';

const services = [
    {
        title: 'UI/UX Creative Design',
        description: "We specialize in UI / UX Creative Design that transforms your ideas into visually stunning and user-friendly digital experiences. Our expert designers focus on creating intuitive interfaces that not only look great but also enhance user engagement.",
        videoUrl: 'https://videos.pexels.com/video-files/2516160/2516160-hd_1920_1080_24fps.mp4',
        circlePosition: { bottom: 0, right: 0, clipPath: 'circle(calc(6.25rem + 7.5vw) at 100% 100%)' },
    },
    {
        title: 'Strategy & Digital Marketing',
        description: 'Our expert team tailors marketing strategies to fit your unique needs. From detailed market analysis to innovative digital campaigns, we ensure your brand stands out and drives growth in today competitive landscape.',
        videoUrl: 'https://videos.pexels.com/video-files/7578632/7578632-sd_960_506_25fps.mp4',
        circlePosition: { bottom: 0, left: 0, clipPath: 'circle(calc(6.25rem + 7.5vw) at 0% 100%)' }
    },
    {
        title: 'Full Stack developers',
        description: 'We offer both junior and senior developers skilled in contributing to open source projects and building highly effective web apps. Our team is dedicated to delivering robust solutions that meet your business needs.',
        videoUrl: 'https://videos.pexels.com/video-files/5474270/5474270-sd_960_506_25fps.mp4',
        circlePosition: { top: 0, right: 0, clipPath: 'circle(calc(6.25rem + 7.5vw) at 100% 0%)' }
    },
    {
        title: 'FE / BE developers',
        description: 'We provide skilled developers for both front-end and back-end roles. Whether you need expertise in creating engaging user interfaces or building robust server-side solutions, you can choose the developer who best fits your project needs.',
        videoUrl: 'https://videos.pexels.com/video-files/7026674/7026674-sd_360_640_24fps.mp4',
        circlePosition: { top: 0, left: 0, clipPath: 'circle(calc(6.25rem + 7.5vw) at 0% 0%)' }
    }
];

const Details = () => {
    return (
        <Box w="100%" minH="100vh" bg="#000" textAlign="center" py={20} px={8}>
            <Text color="gray.400" fontSize="lg" mb={2} display="flex" justifyContent="center" alignItems="center">
                what we're offering
                <Box as="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" ml={3} w={6} h={6} color="indigo.600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </Box>
            </Text>
            <Heading color="white" fontSize={['4xl', '5xl', '6xl']} fontWeight="semibold" mb={16}>
                Services Built Specifically for your Business
            </Heading>
            <Grid templateColumns={['1fr', 'repeat(2, 1fr)']} gap={5} maxW="5xl" mx="auto">
                {services.map((service, index) => (
                    <Box
                        key={index}
                        position="relative"
                        p={10}
                        bg="gray.800"
                        overflow="hidden"
                        transition="all 0.6s ease"
                        _hover={{
                            bg: '#512DA8',
                            cursor: "pointer",
                            boxShadow: '0.063rem 0.063rem 1.25rem 0.375rem rgba(0, 0, 0, 0.53)',
                        }}
                    >
                        <Box
                            as="video"
                            src={service.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            position="absolute"
                            w="100%"
                            h="100%"
                            zIndex={0}
                            objectFit="cover"
                            {...service.circlePosition}
                        />
                        <Box position="relative"
                            {...(index % 2 === 0 ? { pr: ['0', '52'] } : { pl: ['0', '48'] })}>
                            <Heading as="h2" color="white" mb={4} fontSize={['2xl', '3xl']}>
                                {service.title}
                            </Heading>
                            <Text textAlign={"center"} color="gray.400" transition="0.8s" fontSize={{ base: "0.8rem", md: "0.85rem", lg: "0.9rem" }} _hover={{ color: 'white' }}>
                                {service.description} <Text as="span" color="red">{service.spanText}</Text>
                            </Text>
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default Details;