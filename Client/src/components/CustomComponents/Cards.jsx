import React from "react";
import "./Card.css";
import anime from "animejs";
import { useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";

const Card = ({ data }) => {
    function readMore(a, b) {
        let message = `${a} - ${b}`;
        alert(message);
    }

    let cardAnimation = () => {
        anime({
            targets: ".Card",
            translateX: [-2000, 0],
            direction: "normal",
            easing: "linear",
            delay: 500,
            opacity: [0, 1]
        });
    };

    useEffect(() => {
        cardAnimation();
    });

    return (
        <>
            <Box bg="#000" w="100%" h="auto">

                <Text color="#fff" align={"center"} fontWeight={"bold"} fontSize={{ base: "30px", md: "35px", lg: "45px" }}>
                    Tech's we mostly use
                </Text>
            </Box>
            <Box bg="#000" className="Card">
                {data.map((item, index) => (
                    <Box border="1px solid red" className="box" key={index}>
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <a
                            href={item.link}
                            className="btn"
                            onClick={() => readMore(item.title, item.content)}
                        >
                            Read more
                        </a>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default Card;
