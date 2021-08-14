import './App.css';
import { hot } from 'react-hot-loader/root';
import NavBar from './component/Navigation';
import { Route, Switch, HashRouter  as Router } from 'react-router-dom';
import Main from './pages/Main';
import ScrollToTop from './component/ScrollToTop';
import React from 'react';

const App = () => {
    const rsvpUrlParam = new URLSearchParams(window.location.search).get("rsvp")
    const [rsvpFlag, setRsvpFlag] = React.useState(rsvpUrlParam === "true");

    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <div className="App">
                    <NavBar rsvpFlag={rsvpFlag}/>
                    <Route path="/" exact>
                        <Main rsvpFlag={rsvpFlag}/>
                    </Route>
                    <Route path="/wedding" exact>
                        <Main rsvpFlag={rsvpFlag}/>
                    </Route>
                </div>
            </Switch>
        </Router>
    );
}


export default hot(App);
