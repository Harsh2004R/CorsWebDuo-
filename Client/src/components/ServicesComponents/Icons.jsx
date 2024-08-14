import React from 'react'
import { IconCloudDemo } from '@/components/CustomComponents/IconCloudDemo.jsx';
import { Box,Center,Text } from '@chakra-ui/react';
const Icons = () => {
    return (
        <>
            <Box bg="#000" w="100%" h="auto" display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignContent={"center"} alignItems={"center"}>
                <Text pt={{base:"20px",md:"40px",lg:"50px"}} color="#fff" fontWeight={"800"} fontSize={{base:"2xl",md:"4xl",lg:"45px"}}>Other's we use</Text>
                <IconCloudDemo />
            </Box>
        </>
    )
}

export default Icons
