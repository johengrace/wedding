import { Button, Menu } from "antd";
import 'antd/dist/antd.css';
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link as ScrollLink} from "react-scroll";
import { scroller } from "react-scroll";

const NavBar = () => {
    return(
        // <div className="menu">
        // <Menu mode="horizontal">
        //     <Menu.Item key="home">
        //         <ScrollLink to="home" smooth={true}>
        //             Home
        //         </ScrollLink>
        //     </Menu.Item>
        //     <Menu.Item key="event">
        //         <ScrollLink to="event" smooth={true} offset={40}>
        //             Event
        //         </ScrollLink>
        //     </Menu.Item>
        //     <Menu.Item key="story">
        //         <ScrollLink to="story"  smooth={true}>
        //             Our Story
        //         </ScrollLink>
        //     </Menu.Item>
        //     <Button className="rsvp-button" type="primary">
        //         <ScrollLink to="rsvp" smooth={true}>
        //             RSVP
        //         </ScrollLink>
        //     </Button>
            
        // </Menu>
        // </div>
        <Navbar bg="light" variant="light" fixed="top" >
            <Navbar.Collapse className="justify-content-center">
                <Nav defaultActiveKey="/home">
                    <Nav.Link 
                    eventKey="home"
                    onSelect={() => scroller.scrollTo('home', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
                    })}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link 
                    eventKey="event"
                    onSelect={() => scroller.scrollTo('event', {
                    smooth: true,
                    offset: -70,
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
                    <Nav.Link 
                    eventKey="rsvp"
                    onSelect={() => scroller.scrollTo('rsvp', {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                    })}>
                        RSVP
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;