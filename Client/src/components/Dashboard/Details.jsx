import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@chakra-ui/react'
const Details = () => {
    useEffect(() => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8]
    })
    return (
        <Box w="100%" h="100vh" px={{ base: "1", md: "4", lg: "12" }}>
            <Box w="100%" h="auto" bg="#222" borderRadius={"40px"}>
                <Grid

                    templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)" }}
                    gap={4} w="100%"
                    h="100%"
                    border={"1px solid lime"}
                >
                    <Box  m="auto" w={{ base: "90%", md: "85%", lg: "85%" }} h="10vh" bg="red">

                    </Box>
                    <Box  m="auto" w={{ base: "90%", md: "85%", lg: "85%" }} h="10vh" bg="red">

                    </Box>


                </Grid>
            </Box>


        </Box>
    )
}

export default Details
