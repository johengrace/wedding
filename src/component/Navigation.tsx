import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";
import { InferProps } from "prop-types";

interface propTypes {
    rsvpFlag: boolean;
}

type Props = InferProps<propTypes>;

const NavBar = ({ rsvpFlag } : Props) => {
    const [scrollState, setScrollState] = React.useState("top");

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
                        className="mx-2 navBarButton"
                        eventKey="gallery"
                        onSelect={() => scroller.scrollTo('gallery', {
                            offset: -30,
                            duration: 200,
                        })}>
                            Gallery
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
                                scroller.scrollTo('weddingEvent', {
                                    offset: -30,
                                    duration: 200,
                                });
                            }
                        }}>
                            {rsvpFlag ? "RSVP" : "Watch Live"}
                        </Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </>
    )
}

export default NavBar;