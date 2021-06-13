import React, { useState } from "react";
import { Parallax, ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import FancyButton from "./FancyButton";

const ParallaxScroll = () => {
    const [user, setUser] = useState("grace");
    return (
        <FancyButton name={user}></FancyButton>
    )
}


const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <img src="https://live.staticflickr.com/65535/46916286155_da0e275e6a_o.png" />
    </Parallax>
);
 

const ParallaxLayout = () => (
    <ParallaxProvider>
        <ParallaxImage />
        <h1>Home</h1>
        <ParallaxImage />
        <h1>About Us</h1>
    </ParallaxProvider>
    
    
);

export {ParallaxScroll, ParallaxImage, ParallaxLayout};