import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from '../CustomComponents/Cards.jsx';

import html from "../Images/html.png"
import css from "../Images/css.png"
import js from "../Images/js.png"
import react from "../Images/react.png"
import node from "../Images/node.png"
import mongo from "../Images/mongo.png"
import sass from "../Images/sass.png"
import chakra from "../Images/chakra.png"


const Techs = () => {
    const data = [
        {
            img: html,
            "title": "HTML 5",
            "content": "The term HTML5 is essentially a buzzword that refers to a set of modern web technologies. This includes the HTML Living Standard, along with JavaScript APIs to enhance storage, multimedia, and hardware access...",
            "link": "#"
        },
        {
            img: css,
            "title": "CSS 3",
            "content": "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media...",
            "link": "#"
        },
        {
            img: js,
            "title": "Java Script",
            "content": "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat...",
            "link": "#"
        },
        {
            img: node,
            "title": "Node JS",
            "content": "",
            "link": "#"
        },
        {
            img: mongo,
            "title": "Mongo db",
            "content": "",
            "link": "#"
        },
        {
            img: react,
            "title": "React JS",
            "content": "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications...",
            "link": "#"
        },
        {
            img: chakra,
            "title": "Chakra UI",
            "content": "",
            "link": "#"
        },
        {
            img: sass,
            "title": "Sass",
            "content": "CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass has features that don't exist in CSS yet like nesting, mixins, inheritance, and other nifty goodies that help you write robust, maintainable CSS...",
            "link": "#"
        }
    ]


    return (
        <>
            <div className="App">
                <Card data={data} />
            </div>
        </>
    )
}

export default Techs
