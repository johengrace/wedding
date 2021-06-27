import './App.css';
import { hot } from 'react-hot-loader/root';
import NavBar from './component/Navigation';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main';
import ScrollToTop from './component/ScrollToTop';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <div className="App">
                <NavBar />
                <Route path="/" exact component={Main} />
                <Route path="/wedding" exact component={Main} />
                {/* <Route path="/story" component={Story} />
                <Route path="/rsvp" component={Rsvp} /> */}
                </div>
            </Switch>

            
                    
                {/* <Home />
                <Story />
                <Rsvp /> */}
                
                {/* <ParallaxLayout/> */}
        </Router>
    );
}


export default hot(App);
