import React from 'react'
import "./AboutHero.scss"
import { Box, Center, ListItem, Text, UnorderedList } from '@chakra-ui/react'

const AboutHero = () => {

    return (
        <>
            {/* <AnimatedGridPatternDemo/> */}
            <Box w="100%" h='auto' bg="#000">
                <div class="container">
                    <Center w="100%" h="auto" py="15px" bg="#000">
                        <Text fontWeight={"800"} bgGradient="linear(to-b, black, gray.300)" bgClip="text" fontSize={{ base: "7xl", md: "8xl", lg: "120px" }}>About us</Text>
                    </Center>
                    <main>
                        <article class="content">
                            <section class="content__descriptor">
                                <h2 class="content__title">Welcome to CorsWebDuo</h2>
                            </section>
                            <section class="content__text-box">
                                <p class="content__text">
                                    At CorsWebDuo, we are more than just a web development agency —we are your partners in digital transformation.
                                </p>
                                <p class="content__text">
                                    Our mission is to empower businesses by providing top-tier web development services that cater to their unique needs and help them thrive in today's competitive market.
                                </p>
                            </section>
                        </article>


                        <article class="content">
                            <section class="content__descriptor">
                                <h2 class="content__title">Who We Are</h2>
                            </section>
                            <section class="content__text-box">
                                <p class="content__text">
                                    Founded by passionate web developers with a vision to make high-quality web solutions accessible to everyone, CorsWebDuo has grown into a trusted name in the industry. We specialize in creating full-stack web applications that are not only functional but also visually stunning.
                                </p>
                                <p class="content__text">
                                    Our team is composed of skilled professionals who are dedicated to delivering excellence in every project we undertake.
                                </p>
                            </section>
                        </article>



                        <article class="content">
                            <section class="content__descriptor">
                                <h2 class="content__title">What We Offer</h2>
                            </section>
                            <section class="content__text-box">
                                {/* <p class="content__text">
                                    We aim to be the investors we wished we had when we started out.
                                    Lightning-fast, always on your side and fundamentally helpful.
                                </p>
                                <p class="content__text">
                                    Our knowledge is your knowledge. Our network is your network. Your
                                    problems are our problems. We don't have all the answers, but we
                                    will help you find them.
                                </p> */}
                                <UnorderedList color="#fff" fontSize={
                                    "1.5rem"
                                }>
                                    <ListItem>Custom Web Development</ListItem>
                                    <ListItem>Full-Stack Solutions</ListItem>
                                    <ListItem>Affordable Pricing</ListItem>
                                    <ListItem>Job Opportunities</ListItem>
                                    <ListItem>Client-Focused Approach</ListItem>
                                </UnorderedList>
                            </section>
                        </article>
                    </main>
                </div>
            </Box>


        </>
    )
}

export default AboutHero
