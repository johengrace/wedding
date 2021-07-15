import { Button, Menu } from "antd";
import 'antd/dist/antd.css';
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
    return(
        <div className="menu">
        <Menu mode="horizontal">
            <Menu.Item key="home">
                <ScrollLink to="home" smooth={true}>
                    Home
                </ScrollLink>
            </Menu.Item>
            <Menu.Item key="event">
                <ScrollLink to="event" smooth={true} offset={40}>
                    Event
                </ScrollLink>
            </Menu.Item>
            <Menu.Item key="story">
                <ScrollLink to="story"  smooth={true}>
                    Our Story
                </ScrollLink>
            </Menu.Item>
            <Button className="rsvp-button" type="primary">
                <ScrollLink to="rsvp" smooth={true}>
                    RSVP
                </ScrollLink>
            </Button>
            
        </Menu>
        </div>
        
    )
}

export default NavBar;