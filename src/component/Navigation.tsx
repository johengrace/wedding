import { Button } from 'react-bootstrap';
import React from "react";
import Modal from 'react-bootstrap/Modal'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Container, Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";
import { InferProps } from "prop-types";

interface propTypes {
    rsvpFlag: boolean;
}

type Props = InferProps<propTypes>;

const NavBar = ({ rsvpFlag } : Props) => {
    const [showModal, setShowModal] = React.useState(false);
    const [scrollState, setScrollState] = React.useState("top");

    const handleClose = () => setShowModal(false);

    let listener: any = null

    React.useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = window.scrollY
            if (scrolled >= 120) {
                if (scrollState !== "scrolled") {
                    setScrollState("scrolled")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])

    return(
        <>
        <Container>
            <Navbar expand="lg" bg="custom" variant="light" fixed="top" 
                className={scrollState === "top" ? "transparent" : ""}
                collapseOnSelect 
                onToggle={(expanded) => {
                    if (expanded) {
                        setScrollState("scroll")
                    }
                }}>
                <Navbar.Brand className="d-block d-sm-block d-md-block d-lg-none d-xl-none py-0 mx-3 brand">Joshua & Grace</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-2"/>
                <Navbar.Collapse id="basic-navbar-nav " className="justify-content-center">
                    <Nav defaultActiveKey="/home">
                        <Nav.Link
                        className="mx-2 navBarButton"
                        eventKey="home"
                        onSelect={() => scroller.scrollTo('home', {
                            offset: 0,
                            duration: 200,
                            delay: 0,
                        })}>
                            Home
                        </Nav.Link>
                        <Nav.Link 
                        className="mx-2 navBarButton"
                        eventKey="event"
                        onSelect={() => scroller.scrollTo('weddingEvent', {
                            offset: -30,
                            duration: 200,
                            delay: 0,
                        })}>
                            Event
                        </Nav.Link>
                        <Nav.Link 
                        className="mx-2 navBarButton"
                        eventKey="story"
                        onSelect={() => scroller.scrollTo('story', {
                            offset: -30,
                            duration: 200,
                        })}>
                            Our Story
                        </Nav.Link>
                        <Nav.Link 
                        className="navbar-right mx-2 rsvpNavButton btn btn-outline-primary btn-sm"
                        eventKey="rsvp"
                        onClick={() => {
                            if (rsvpFlag) {
                                scroller.scrollTo('rsvp', {
                                    offset: -30,
                                    duration: 200,
                                });
                            }
                            else {
                                setShowModal(true);
                            }
                        }}>
                            RSVP
                        </Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        <Modal show={showModal}>
            <Modal.Body>
                <Tabs defaultActiveKey="english" className="mb-3">
                    <Tab eventKey="english" title="English" className="modalTab">
                        <p className="openSans mt-3 lh-lg">
                            Dear guests - Due to the COVID-19 situation, only limited guest can attend the onsite wedding, 
                            hence we will be tying the knot live from Youtube for some of our family 
                            and friends who we wish to be there. We really appreciate your understanding.
                            <br/>
                            <br/>
                            The youtube link will be available on this website on our wedding day, 2 October 2021
                            <br/>
                            <br/>
                            Stay tune and hope to celebrate with you soon!
                        </p>
                    </Tab>
                    <Tab eventKey="indonesia" title="Bahasa Indonesia" className="modalTab">
                        <p className="openSans mt-3 lh-lg">
                            Kepada semua undangan yang terhormat, karena kondisi pandemi COVID-19, pernikahan kami 
                            hanya dapat dihadiri dengan jumlah undangan onsite yang terbatas. Kami berharap anda 
                            dapat mengambil bagian dalam hari spesial kami melalui Youtube Live 
                            (link akan tersedia di website ini pada hari H, 2 Oktober 2021)
                            <br/>
                            <br/>
                            Terima kasih untuk dukungan dan doa anda.
                        </p>
                    </Tab>
                </Tabs>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose} className="eventButton">
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default NavBar;