import HTMLFlipBook from "react-pageflip";
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { InferProps } from "prop-types";
import img1 from "../assets/DSC01550_compressed_square.jpg"


const Page = React.forwardRef((props, ref) => {
    return (
        <div className={"galleryPage " + props.className} ref={ref} data-density="hard">
            <div className="page-content">
                <div className="page-image">{props.children}</div>
                <div className="page-footer">{props.number}</div>
            </div>
        </div>
    );
});

const Gallery = () => {
    const [page, setPage] = React.useState(0);
    const [totalPage, setTotalPage] = React.useState(0);
    let flipBook = null

    const onPage = (e) => {
        setPage(e.data);
    };

    return(
        <Row className="gallery overflow-hidden">
                <HTMLFlipBook
                    width={500}
                    height={800}
                    size="stretch"
                    minWidth={315}
                    minHeight={400}
                    maxShadowOpacity={0.5}
                    drawShadow={true}
                    mobileScrollSupport={true}
                    onFlip={onPage}
                    startZIndex={1}
                    className="gallery-book"
                    ref={(el) => (flipBook = el)}
                >

                    <Page number={1} className="firstPage">
                        <img 
                        className="galleryBg" 
                        src="https://i.pinimg.com/originals/93/10/30/931030519d5dacba7f810e6ae40d3ea9.png"/>
                        <ul>
                            <li><img src={img1} /></li>
                            <li><div className="emptyImage"/></li>
                            <li><div className="emptyImage"/></li>
                            <li><img src={img1} /></li>
                        </ul>
                    </Page>
                    <Page number={2}>
                        <img 
                        className="galleryBg2" 
                        src="https://i.pinimg.com/originals/93/10/30/931030519d5dacba7f810e6ae40d3ea9.png"/>
                        <ul>
                            <li><img src={img1} /></li>
                            <li><div className="emptyImage"/></li>
                            <li><div className="emptyImage"/></li>
                            <li><img src={img1} /></li>
                        </ul>
                    </Page>
                    <Page number={3}>
                        <img 
                        className="galleryBg" 
                        src="https://i.pinimg.com/originals/93/10/30/931030519d5dacba7f810e6ae40d3ea9.png"/>
                        <ul>
                            <li><img src={img1} /></li>
                            <li><div className="emptyImage"/></li>
                            <li><div className="emptyImage"/></li>
                            <li><img src={img1} /></li>
                        </ul>
                    </Page>
                    <Page number={4} className="lastPage">
                        <img 
                        className="galleryBg2" 
                        src="https://i.pinimg.com/originals/93/10/30/931030519d5dacba7f810e6ae40d3ea9.png"/>
                        <ul>
                            <li><img src={img1} /></li>
                            <li><div className="emptyImage"/></li>
                            <li><div className="emptyImage"/></li>
                            <li><img src={img1} /></li>
                        </ul>
                    </Page>

                </HTMLFlipBook>
        </Row>
    )
}

export default Gallery;