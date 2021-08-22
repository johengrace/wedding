import HTMLFlipBook from "react-pageflip";
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { InferProps } from "prop-types";
import * as galleryImg from '../component/GalleryPhotos'
import pageDecor from '../assets/gallery/pageDecor.png'


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
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const galleryRow = React.useRef();
    
    let flipBook = null;
    let pageOffsetTop = null;

    const onPage = (e) => {
        setPage(e.data);
    };

    const attachScrollListener = () => {
        pageOffsetTop = document.addEventListener("scroll", e => {
            console.log(galleryRow.current)
        })
    }

    React.useEffect(() => {
        pageOffsetTop = document.addEventListener("scroll", e => {
            if (galleryRow.current.getBoundingClientRect().top <= 1500) {
                if (!imageLoaded){
                    setImageLoaded(true)
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", pageOffsetTop)
        }
    }, [])

    return(
        <Row className="gallery overflow-hidden" ref={galleryRow}>
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
                        <img className="galleryBg" src={pageDecor}/>
                        <img className="galleryBg2" src={pageDecor}/>
                        <ul>
                            <li>{imageLoaded ? <img src={galleryImg.dsc01481img}/> : <></> }</li>
                            <li className="emptyImage"><div/></li>
                            <li className="emptyImage"><div/></li>
                            <li>{imageLoaded ? <img src={galleryImg.dsc01723img}/> : <></> }</li>
                        </ul>
                    </Page>
                    <Page number={2}>
                        <img className="galleryBg" src={pageDecor}/>
                        <img className="galleryBg2" src={pageDecor}/>
                        <ul>
                            <li>{imageLoaded ? <img src={galleryImg.dsc02178img}/> : <></> }</li>
                            <li className="emptyImage"><div/></li>
                            <li className="emptyImage"><div/></li>
                            <li>{imageLoaded ? <img src={galleryImg.dsc02077img}/> : <></> }</li>
                        </ul>
                    </Page>
                    <Page number={3}>
                        <img className="galleryBg" src={pageDecor}/>
                        <img className="galleryBg2" src={pageDecor}/>
                        <ul>
                            <li>{imageLoaded ? <img src={galleryImg.dsc01550img}/> : <></> }</li>
                            <li className="emptyImage"><div/></li>
                            <li className="emptyImage"><div/></li>
                            <li>{imageLoaded ? <img src={galleryImg.dsc02142img}/> : <></> }</li>
                        </ul>
                    </Page>
                    <Page number={4}>
                        <img className="galleryBg" src={pageDecor}/>
                        <img className="galleryBg2" src={pageDecor}/>
                        <ul>
                            <li>{imageLoaded ? <img src={galleryImg.dsc02180img}/> : <></> }</li>
                            <li className="emptyImage"><div/></li>
                            <li className="emptyImage"><div/></li>
                            <li>{imageLoaded ? <img src={galleryImg.dsc02053img}/> : <></> }</li>
                        </ul>
                    </Page>
                    <Page number={5}>
                        <img className="galleryBg" src={pageDecor}/>
                        <img className="galleryBg2" src={pageDecor}/>
                        <ul>
                            <li>{imageLoaded ? <img src={galleryImg.dsc02224img}/> : <></> }</li>
                            <li className="emptyImage"><div/></li>
                            <li className="emptyImage"><div/></li>
                            <li>{imageLoaded ? <img src={galleryImg.dsc02318img}/> : <></> }</li>
                        </ul>
                    </Page>
                    <Page number={6} className="lastPage">
                        <img className="galleryBg" src={pageDecor}/>
                        <img className="galleryBg2" src={pageDecor}/>
                        <ul>
                            <li>{imageLoaded ? <img src={galleryImg.dsc02193img}/> : <></> }</li>
                            <li className="emptyImage"><div/></li>
                            <li className="emptyImage"><div/></li>
                            <li>{imageLoaded ? <img src={galleryImg.dsc02195img}/> : <></> }</li>
                        </ul>
                    </Page>

                </HTMLFlipBook>
        </Row>
    )
}

export default Gallery;