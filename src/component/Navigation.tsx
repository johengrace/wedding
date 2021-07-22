import 'antd/dist/antd.css';
import { Button } from 'react-bootstrap';
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link as ScrollLink} from "react-scroll";
import { scroller } from "react-scroll";

const NavBar = () => {
    return(
        <Container>
            <Navbar expand="lg" bg="light" variant="light" fixed="top" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav defaultActiveKey="/home">
                        <Nav.Link 
                        eventKey="home"
                        onSelect={() => scroller.scrollTo('home', {
                            smooth: true,
                            offset: 0,
                            duration: 500,
                        })}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                        eventKey="event"
                        onSelect={() => scroller.scrollTo('event', {
                        smooth: true,
                        offset: -30,
                        duration: 500,
                        })}
                        >
                            Event
                        </Nav.Link>
                        <Nav.Link 
                        eventKey="story"
                        onSelect={() => scroller.scrollTo('story', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
                        })}
                        >
                            Our Story
                        </Nav.Link>
                        <Button 
                        className="navbar-right"
                        variant="outline-primary"
                        size="sm"
                        onClick={() => scroller.scrollTo('rsvp', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
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