import { motion } from "framer-motion";
import React from "react";
import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import shuffle from "lodash/shuffle";
import CrossFadeImage from "../component/CrossFadeImage";
import useInterval from "../component/useInterval";

let images: string[] = [cover1, cover2];
const getRandomImage = () => {
    const displayedImg = images.shift()!;
    images = shuffle(images).concat([displayedImg]);
    return images[0];
};

const Home = () => {
    const [image, setImage] = React.useState(images[0]);
    
    useInterval(() => {
        if (true) {
          setImage(getRandomImage());
        }
    }, 5000);

    return(
    <motion.div
      animate={{
        opacity: 1
      }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      initial={{ opacity: 0 }}
      className="home"
    >
        <div className="home">
            <div className="name">
            <motion.h1
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
                initial={{ opacity: 0, y: 20 }}
            >
                Joshua & Grace
            </motion.h1>
            </div>
            
            {/* Cover picture will be here */}
            <CrossFadeImage
                src={image}
                alt="phonee"
                transitionDuration={0.8}
                curve="ease-in-out"
            />
            </div>
    </motion.div>
    )
}

export default Home;