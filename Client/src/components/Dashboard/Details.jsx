import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
const ColorArray = [
    "7E57C2",
    "FFA726",
    "E91E63",
    "00796B",
    "7C4DFF",
]
const initialIDs = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
const Details = () => {
    // useEffect(() => {
    //    
    // })
    const [ID, setID] = useState(initialIDs);

    const handleDelete = (id) => {
        setID(ID.filter(el => el !== id));
    };
    return (
        <>
            <Box
                // border={"1px solid red"}
                w="100%" h="100vh" px={{ base: "1", md: "4", lg: "12" }}>
                <Box w="100%" bg="#222" h="100%" overflowY="scroll" py="20px" borderRadius={"40px"}
                    css={{
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        scrollbarWidth: 'none', // For Firefox
                        msOverflowStyle: 'none',  // For Internet Explorer and Edge
                    }}
                >
                    <Grid
                        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)" }}
                        gap={4} w="100%"
                    // border={"1px solid lime"}
                    >
                        {ID.map((el, i) => {
                            const randomColor = ColorArray[Math.floor(Math.random() * ColorArray.length)];
                            return (
                                <Box p={{ base: "2", md: "3", lg: "5" }} borderRadius={"xl"} key={i} m="auto" w={{ base: "90%", md: "95%", lg: "95%" }} h="auto" bg={`#${randomColor}`} display="flex" alignItems="center" justifyContent="center">
                                    <Box w="100%" h="100%" >
                                        <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>First name :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Harsh</Text></Text>
                                        <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Last name :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Sharma</Text></Text>
                                        <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Email :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>harshsharmaktm03@gmail.com</Text></Text>
                                        <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Contact :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>7454982623</Text></Text>
                                        <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Country :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>India</Text></Text>
                                        <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Street Address :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Shiv Colony</Text></Text>
                                        <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>City :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Khatima</Text></Text>
                                        <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>State :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Uttarakhand</Text></Text>
                                        <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Postal Code :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>26-23-08</Text></Text>
                                        <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Website | Portfolio :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}><Link to={""}>http://jbhugfdsahgfsadgf.com</Link></Text></Text>
                                        <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>About :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Sharma</Text></Text>
                                    </Box>
                                    <MdDelete color='#fff' size={"25px"} onClick={() => handleDelete(el)} cursor="pointer" />
                                </Box>
                            );
                        })}
                    </Grid>
                </Box>
            </Box>
        </ >
    )
}

export default Details
