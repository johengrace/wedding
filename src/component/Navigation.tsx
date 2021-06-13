import { Menu, Switch } from "antd";
import { useState } from "react";
import 'antd/dist/antd.css';
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "../pages/Home";
import Story from "../pages/Story";


const NavBar = () => {
    const [state, setState] = useState("home");
    

    function handleClick(value:string) {
        setState(value);
    }

    return(
        <Menu mode="horizontal" className="top-nav">
            <Menu.Item key="home">
                <Link to="/home"></Link>
                Home
            </Menu.Item>
            <Menu.Item key="story">
                <Link to="/our-story"></Link>
                Our Story
            </Menu.Item>
            <Menu.Item key="rsvp">
                <Link to="/rsvp"></Link>
                RSVP
            </Menu.Item>
        </Menu>
    )
}


export default NavBar;