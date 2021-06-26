import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Story = () => {
    return(
        <div className="story" id="story">
            <div className="s-heading">
                <h1>Our Story</h1>
                <p></p>
            </div>
        </div>
    )
}

export default Story;