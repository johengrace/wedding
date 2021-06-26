import { motion } from "framer-motion";

const Home = () => {
    return(
    <motion.div
      animate={{
        opacity: 1
      }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      id="topofpage"
      className="home"
    >
        <div className="home">
            <div className="s-heading">
            <motion.h1
                className="details"
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
                initial={{ opacity: 0, y: 20 }}
            >
                Johen & Grace 
            </motion.h1>
            </div>
        </div>
    </motion.div>
    
        
        
    )
}

export default Home;