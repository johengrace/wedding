import './App.css';
import NavBar from './component/Navigation';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './component/ScrollToTop';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <div className="App">
                <NavBar />
                <Route path="/" exact component={Home} />
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


export default App;
