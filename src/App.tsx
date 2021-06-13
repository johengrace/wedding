import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxImage, ParallaxLayout } from './component/ParallaxScroll';
import NavBar from './component/Navigation';
import Layout, { Content, Header } from 'antd/lib/layout/layout';

const App = () => {
    return (
        <Layout>
            <Header>
                <NavBar />
            </Header>
            <Content>
            </Content>
        </Layout>
        
    );
}


export default App;
