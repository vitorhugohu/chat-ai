"use client";

import Link from 'next/link';
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import 'antd/dist/reset.css'; // estilos do AntD v5
import { Button, Flex } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}



export default function Home() {
  const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Descrição',
    dataIndex: 'address',
    key: 'address',
  },
  
  {
    title: 'Ação',
    key: 'action',
    render: (_: any, record: DataType) => (
      <Space size="middle">
        <a>Visualizar</a>
      </Space>
    ),
  },
];
const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

  return (
    <>
      <div style={{width: '500px', margin: '0 auto', marginTop: '50px'}}>
            <Table columns={columns} dataSource={data}/>
      <div style={{display: 'flex', justifyContent: 'end', marginTop: '20px', marginRight: '20px'}}>
       
          <Link href={"/chat"}> 
            <Button type="primary">Enviar Mensagem</Button>
          </Link>
      
      </div>
      </div>
      
        
      
      
    </>
  );
}
