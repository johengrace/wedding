import { Menu } from "antd";
import { useState } from "react";
import 'antd/dist/antd.css';



const NavBar = () => {
    const [state, setState] = useState("home");
    

    function handleClick(value:string) {
        setState(value);
    }

    return(
        <Menu mode="horizontal" className="top-nav">
            <Menu.Item>
                Home
            </Menu.Item>
            <Menu.Item>
                Our Story
            </Menu.Item>
            <Menu.Item className="topnav">
                RSVP
            </Menu.Item>
        </Menu>
    )
}


export default NavBar;