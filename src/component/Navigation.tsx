import { Button } from 'react-bootstrap';
import { Container, Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";

const NavBar = () => {
    return(
        <Container>
            <Navbar expand="lg" bg="light" variant="light" fixed="top" >
                <Navbar.Brand className="d-block d-sm-block d-md-block d-lg-none d-xl-none py-0 mx-3 brand">Joshua & Grace</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-2" />
                <Navbar.Collapse id="basic-navbar-nav " className="justify-content-center">
                    <Nav defaultActiveKey="/home">
                        <Nav.Link
                        className="mx-2"
                        eventKey="home"
                        onSelect={() => scroller.scrollTo('home', {
                            offset: 0,
                            duration: 200,
                            delay: 0,
                        })}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                        className="mx-2"
                        eventKey="event"
                        onSelect={() => scroller.scrollTo('event', {
                        offset: -30,
                        duration: 200,
                        delay: 0,
                        })}
                        >
                            Event
                        </Nav.Link>
                        <Nav.Link 
                        className="mx-2"
                        eventKey="story"
                        onSelect={() => scroller.scrollTo('story', {
                        offset: -30,
                        duration: 200,
                        })}
                        >
                            Our Story
                        </Nav.Link>
                        <Button 
                        className="navbar-right mx-2"
                        variant="outline-primary"
                        size="sm"
                        onClick={() => scroller.scrollTo('rsvp', {
                        offset: -30,
                        duration: 200,
                        })}>
                            RSVP
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        
    )
}

export default NavBar;