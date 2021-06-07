import React, { FC } from "react"
import { Breadcrumb, Button, Layout, Menu } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export interface RootPageProps {
    header: string;
}

const RootPage: FC = () => (
    <div className="App">
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
        
            </Header>
            
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Content</div>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    </div>
  );

export default RootPage;