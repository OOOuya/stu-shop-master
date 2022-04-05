import React, {useEffect, useState} from 'react';
import {Button, Card, Popconfirm, Table} from "antd";
import {listApi} from "../../../services/products";

/*
const dataSource = [{
    id: 1,
    name: '香皂',
    price: 5
}, {
    id: 2,
    name: '特仑苏',
    price: 6
}, {
    id: 3,
    name: '小浣熊',
    price: 6
}
]*/

function List(props) {
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        return () => {
            listApi().then(res => {
                console.log(res)
                setDataSource(res.data)
            });
        };
    }, []);
    
    const columns = [{
        title: "序号",
        key: 'id',
        width: 80,
        align: 'center',
        render: (txt, record, index) => index + 1
    }, {
        title: "名字",
        dataIndex: 'name'
    }, {
        title: '价格',
        dataIndex: "price"
    }, {
        title: '操作',
        render: (txt, record, index) => {
            return (
                <div>
                    <Button type={"primary"} size={"small"}>修改</Button>
                    <Popconfirm
                        title={"确认删除此项？"}
                        onCancel={() => console.log("用户取消删除")}
                        onConfirm={() => console.log("用户确认删除")}
                    >
                        <Button style={{margin: "0 1rem"}} danger size={"small"}>删除</Button>
                    </Popconfirm>
                </div>
            )
        }
    }
    ]
    return (
        <Card title={"商品列表"} extra={
            <Button type={"primary"} size={"small"} onClick={() => props.history.push("/admin/products/edit")}>新增</Button>}>
            <Table rowKey={"id"} columns={columns} bordered dataSource={dataSource}/>
        </Card>
    );
}

export default List;