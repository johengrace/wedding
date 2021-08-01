import { motion, AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";
import Home from "./Home";
import Rsvp from "./Rsvp";
import Story from "./Story";
import WEvent from "./WeddingEvent";

const Main = () => {
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
            <Rsvp />
        </motion.div>
        </AnimatePresence>
    );
}

export default Main;