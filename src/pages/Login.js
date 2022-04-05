import React from 'react';
import {Button, Card, Checkbox, Form, Input, message} from "antd";
import "./Login.css"
import {getToken, setToken} from "../utils/auth";
import {loginApi} from "../services/auth";
function Login(props) {
    const onFinish = (values) => {
        console.log('调用api', values);
        loginApi({
            username: values.username,
            password: values.password
        }).then(r => {
            if (r.code === 'success') {
                message.success("登录成功")
                setToken(r.token)
                props.history.push('/admin')
            }else {
                message.info(r.message)
            }
        }).catch(err => {
            message.error("用户不存在!")
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Card title={"用户登录"} className={"login-form"}>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default Login;