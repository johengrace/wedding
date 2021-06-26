import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Rsvp from "./Rsvp";
import Story from "./Story";

const Home = () => {
    return(
        <AnimatePresence>
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Header/>
            <Story/>
            <Rsvp />
        </motion.div>
        </AnimatePresence>
    );
}

export default Home;