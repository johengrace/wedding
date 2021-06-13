import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxImage, ParallaxLayout } from './component/ParallaxScroll';
import NavBar from './component/Navigation';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Story from './pages/Story';
import Rsvp from './pages/Rsvp';

const App = () => {
    return (
        <Router>
            <Layout>
                <Header>
                    <NavBar />
                </Header>
                <Content>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/our-story">
                        <Story />
                    </Route>
                    <Route path="/rsvp">
                        <Rsvp />
                    </Route>
                </Switch>
                <ParallaxLayout/>
                </Content>

            </Layout>
        </Router>
    );
}


export default App;
