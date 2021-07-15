import { motion } from "framer-motion";
import React from "react";
import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import vertical1 from "../assets/vertical1.jpg";
import shuffle from "lodash/shuffle";
import CrossFadeImage from "../component/CrossFadeImage";
import useInterval from "../component/useInterval";

let images: string[] = [cover1, cover2];
let vImages: string[] = [vertical1];
const getRandomImage = () => {
    const displayedImg = images.shift()!;
    images = shuffle(images).concat([displayedImg]);
    return images[0];
};

const getRandomVImage = () => {
    const displayedImg = vImages.shift()!;
    vImages = shuffle(vImages).concat([displayedImg]);
    return vImages[0];
};

const Home = () => {
    const [image, setImage] = React.useState(images[0]);
    const [vImage, setVimage] = React.useState(vImages[0]);
    
    useInterval(() => {
        if (true) {
          setImage(getRandomImage());
          setVimage(getRandomVImage());
        }
    }, 8000);

    return(
    
    <div className="home">
        <div className="name">
            <motion.h2
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
                initial={{ opacity: 0, y: 20 }}
                className="prename"
            >
                02.10.2021
            </motion.h2>

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

        <motion.h2
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
            initial={{ opacity: 0, y: 20 }}
            className="postname"
        >
            We're Getting Married!
        </motion.h2>
        </div>
        
        {/* Cover picture will be here */}
        <CrossFadeImage
            src={image}
            alt="desktop"
            transitionDuration={0.8}
            curve="ease-in-out"
            className="desktop"
        />
        <CrossFadeImage
            src={vImage}
            alt="phonee"
            transitionDuration={0.8}
            curve="ease-in-out"
            className="mobile"
        />
    </div>
    )
}

export default Home;