import React from 'react';
import {Avatar, Dropdown, Layout, Menu, message} from 'antd';
import Icon from '@ant-design/icons';
import "./index.css";
import {adminRoutes} from "../../routes/index";
import {withRouter} from "react-router-dom";
import {ArrowDownOutlined} from "@ant-design/icons" ;
import '../../utils/auth'
import {clearToken} from "../../utils/auth";
const routes = adminRoutes.filter(route => route.isShow)
const {SubMenu} = Menu;
const {Header, Sider, Content} = Layout;


function Index(props) {
    const popMenu = (
        <Menu onClick={(p) => {
            if (p.key === 'logout') {
                props.history.push('/login')
                clearToken()
            }else {
                message.info(p.key)
            }
        }}>
            <Menu.Item key={"notification"}>通知中心</Menu.Item>
            <Menu.Item key={"settings"}>设置</Menu.Item>
            <Menu.Item key={"logout"}>退出</Menu.Item>
        </Menu>
    )
    return (
        <Layout>
            <Header className="header" style={{
                backgroundColor: '#438bca', height: "50px", display: "flex", justifyContent: "space-between"
            }}>
                <div className="logo"/>
                <Dropdown overlay={popMenu}>
                    <div>
                        <Avatar>U</Avatar>
                        <span style={{color: "#ffffff"}}>超级管理员</span>
                        <Icon component={ArrowDownOutlined}/>
                    </div>
                </Dropdown>
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

