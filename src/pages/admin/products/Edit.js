import React from 'react';
import {Button, Card, Form, Input} from "antd";

function Edit(props) {
    const onFinish = (values) => {
        console.log('Success:' , values)
    }
    const onFinishFailed = (values) => {
        console.log('Failed', values)
    }
    return (
        <Card title={"商品编辑"}>
            <Form
                name={"商品编辑"}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name={"名字"}
                    label={"名字"}
                    rules={[{required: true, message: "请输入商品名字"}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type={"primary"} htmlType={"submit"}>保存</Button>
                </Form.Item>
            </Form>
        </Card>);
}

export default Edit;