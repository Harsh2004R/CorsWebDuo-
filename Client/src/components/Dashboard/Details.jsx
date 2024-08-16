import React, { useEffect, useState } from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import axios from 'axios';
const ColorArray = [
    "7E57C2",
    "FFA726",
    "E91E63",
    "00796B",
    "7C4DFF",
]

const Details = () => {

    const [formData, setFormData] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`https://corswebduo.onrender.com/formdata/delete/${id}`);

            if (response.status === 200) {
                // Remove the deleted item from the state
                setFormData(prevFormData => prevFormData.filter(item => item._id !== id));
            } else {
                console.error('Failed to delete the contact');
            }
        } catch (error) {
            console.error(`Error in deleting contact: ${error.message}`);
        }
    };
    useEffect(() => {
        const controller = new AbortController();
        const fetchFormData = async () => {
            try {
                setLoading(true);
                const data = await axios.get("https://corswebduo.onrender.com/formdata/get", {
                    signal: controller.signal
                });
                if (data && data.status === 200) {
                    setFormData(data.data.data);
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.log(`Error in fetching user's form data: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchFormData();
        return () => {
            controller.abort();
        };
    }, []);
    const randomColor = ColorArray[Math.floor(Math.random() * ColorArray.length)];
    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                formData ? (
                    <Box w="100%" h="100vh" px={{ base: "1", md: "4", lg: "12" }}>
                        <Box w="100%" bg="#222" h="100%" overflowY="scroll" py="20px" borderRadius={"40px"}
                            css={{
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >
                            <Grid
                                templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)" }}
                                gap={4} w="100%"
                            >
                                {formData.map((el, i) => {

                                    return (
                                        <Box p={{ base: "2", md: "3", lg: "5" }} borderRadius={"xl"} key={i} m="auto" w={{ base: "90%", md: "95%", lg: "95%" }} h="auto" bg={`#${randomColor}`} display="flex" alignItems="center" justifyContent="center">
                                            <Box _hover={{ cursor: "pointer" }} w="100%" h="100%">
                                                <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>First name :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{el.firstName}</Text></Text>
                                                <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Last name :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{el.lastName}</Text></Text>
                                                <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Email :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{el.email}</Text></Text>
                                                <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Contact :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{el.contact}</Text></Text>
                                                <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Country :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{el.country}</Text></Text>
                                                <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Street Address :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{el.streetAddress}</Text></Text>
                                                <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>City :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{el.city}</Text></Text>
                                                <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>State :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{el.state}</Text></Text>
                                                <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Postal Code :-{" "}<Text as="span" color="#fff" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{el.postalCode}</Text></Text>
                                                <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Website | Portfolio :-{" "}<Text as="span" color="#2196F3" _hover={{ color: "#fff" }} textDecoration={"underline"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}><Link to={el.website}>{el.website}</Link></Text></Text>
                                                <Text color="#222" fontWeight={"600"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>About :-{" "}<Text as="span" color="#FFFFFF" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{el.about}</Text></Text>
                                                <Text color="#000" fontWeight={"bolder"} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Document ID :-{" "}<Text _hover={{ color: "#fff" }} as="span" color="#FF0000" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{el._id}</Text></Text>
                                            </Box>
                                            <MdDelete color='#fff' size={"25px"} onClick={() => handleDelete(el._id)} cursor="pointer" />
                                        </Box>
                                    );
                                })}
                            </Grid>
                        </Box>
                    </Box>
                ) : (
                    <p>Data not found</p>
                )
            )}
        </>
    )
}

export default Details
