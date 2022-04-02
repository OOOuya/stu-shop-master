import React from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import Icon, {AreaChartOutlined, UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import "./index.css";
import {adminRoutes} from "../../routes/index";
import {withRouter} from "react-router-dom";

const routes = adminRoutes.filter(route => route.isShow)
const {SubMenu} = Menu;
const {Header, Sider, Content} = Layout;


function Index(props) {
    return (<Layout>
        <Header className="header" style={{
            backgroundColor: '#438bca', height: "40px"
        }}>
            <div className="logo"/>
        </Header>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                >
                    {routes.map(route => {
                        return (
                            <Menu.Item key={route.path} onClick={p => props.history.push(p.key)}>
                                <Icon component={route.icon}/>
                                {route.title}
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>
            <Layout style={{padding: '0 50px'}}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24, margin: 0, minHeight: 280,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    </Layout>);
}


export default withRouter(Index);

