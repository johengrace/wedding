import { Menu } from "antd";
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
                <ScrollLink to="event" smooth={true}>
                    Event
                </ScrollLink>
            </Menu.Item>
            <Menu.Item key="story">
                <ScrollLink to="story"  smooth={true}>
                    Our Story
                </ScrollLink>
            </Menu.Item>
            <Menu.Item key="rsvp">
                <ScrollLink to="rsvp"  smooth={true}>
                    RSVP
                </ScrollLink>
            </Menu.Item>
            
        </Menu>
        </div>
        
    )
}

export default NavBar;