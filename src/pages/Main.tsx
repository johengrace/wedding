import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Container } from "react-bootstrap";
import { InferProps } from "prop-types";
import Home from "./Home";
import Rsvp from "./Rsvp";
import Story from "./Story";
import WEvent from "./WeddingEvent";
import Gallery from "./Gallery"
import Footer from "./Footer"

interface propTypes {
    rsvpFlag: boolean;
}

type Props = InferProps<propTypes>;

const Main = ({ rsvpFlag } : Props) => {
    
    return(
        <AnimatePresence>
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Home/>
            <WEvent/>
            <Story/>
            {rsvpFlag ? <Rsvp /> : <></>} 
            <Gallery/>
            <Footer/>
        </motion.div>
        </AnimatePresence>
    );
}

export default Main;