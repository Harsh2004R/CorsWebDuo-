import React from "react";
import "./Card.css";
import anime from "animejs";
import { useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import { BorderBeam } from "@/components/magicui/border-beam";
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
            <Box overflow="hidden" bg="#000" className="Card">
                {data.map((item, index) => (
                    <Box overflow="hidden" position="relative" className="box" key={index}>
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <a
                            // href={item.link}
                            className="btn"
                            onClick={() => readMore(item.title, item.content)}
                        >
                            Read more
                        </a>
                        <BorderBeam size={150} duration={10} delay={9} />
                        {/* <BorderBeam size={150} duration={20} delay={9} /> */}
                    </Box>
                ))}
            </Box>

        </>
    );
};

export default Card;
