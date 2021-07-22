import { motion } from "framer-motion";
import React from "react";
import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import vertical1 from "../assets/vertical1.jpg";
import shuffle from "lodash/shuffle";
import CrossFadeImage from "../component/CrossFadeImage";
import useInterval from "../component/useInterval";
import { Container, Row } from "react-bootstrap";

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
        <Container fluid>
            <motion.div
            animate={{
                opacity: 1
            }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            initial={{ opacity: 0 }}
            >
                <div className="home">
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
                    <div className="home-content text-center my-5">
                        <Row><h4 className="prename">We're Getting Married!</h4></Row>  
                        <Row><h2 className="name">Joshua & Grace</h2></Row>
                        <Row><h4 className="weddingDate">02.10.21</h4></Row>
                    </div>
                </div>
            </motion.div>       
        </Container>
    )
}

export default Home;