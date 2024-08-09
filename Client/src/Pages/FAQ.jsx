import React, { useState } from 'react';
import Footer from "../components/CustomComponents/Footer.jsx";
import Navbar from '../Landing/Navbar.jsx';
import { Box, Center, Text } from '@chakra-ui/react';
import "../CSS/FAQ.css";
import { ChevronDownIcon } from '@chakra-ui/icons';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <Navbar />
            <Box w="100%" h="auto" bg="#000">

                {/* <Text fontSize={"3xl"} color="#FAFAFA" >| FAQ |</Text>
                <Text fontSize={"3xl"} color="grey" >Have a Questions</Text> */}
                <Center w="100%" h="auto" py="8" bg="#000">
                    <div className="w3-center w3-animate-zoom" style={{ marginTop: '-1px' }}>
                        <Box display={"flex"} justifyContent={"center"} className="w3-center w3-content">
                            <Box w={{ base: "100%", md: "70%", lg: "800px" }} px="5" style={{ paddingTop: '0px' }}>
                                <Text display={{ base: "none", md: "block", lg: "block" }} fontSize={{ base: "0px", md: "4xl", lg: "4xl" }} textAlign={"center"} className="header" style={{ color: 'grey' }}><b>Frequently Asked Questions</b></Text><br />
                                <Text fontSize={{ base: "4xl", md: "0px", lg: "0px" }} display={{ base: "block", md: "none", lg: "none" }} textAlign={"center"} className="header" style={{ color: 'grey' }}><b>F A Q</b></Text><br />
                                {faqData.map((faq, index) => (
                                    <div key={index}>
                                        <button
                                            className={`accordion ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => handleAccordionClick(index)}
                                            style={{ display: 'flex', flexDirection: 'row' }}
                                        >
                                            <ChevronDownIcon mr="5px" boxSize={"30px"} />
                                            <b style={{ paddingTop: '2px' }}>{faq.question}</b>
                                        </button>
                                        <div className="panel" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                                            <div className="paragraphs" id={`myDiv_id${index + 1}`}></div>
                                            <p id={`paragraph_id${index + 1}`} >{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </Box>


                        </Box>
                    </div>
                </Center>



            </Box>
            <Footer />
        </>
    );
};

const faqData = [
    {
        question: "What services does CorsWebDuo offer?",
        answer: "We offer a range of services, including web development, e-commerce solutions, collaboration, and more. Each service is tailored to meet the unique needs of our clients."
    },
    {
        question: "How long does it take to complete a web development project?",
        answer: "Project timelines vary depending on the scope and complexity, but we provide a detailed timeline during the project planning phase and keep you updated throughout the process."
    },
    {
        question: "What is your pricing model?",
        answer: "We offer flexible pricing based on the project’s requirements. You can choose from fixed-price packages or hourly rates, depending on your needs."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, we provide ongoing support and maintenance to ensure your website or application continues to perform optimally after launch."
    },
    {
        question: "How do I get started with CorsWebDuo?",
        answer: "You can get started by contacting us through our website’s contact form or by calling us directly. We’ll schedule a consultation to discuss your needs and how we can help."
    }
];
export default FAQ;
