"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import 'antd/dist/reset.css'; // estilos do AntD v5
import { Button, Flex } from 'antd';
import axios from 'axios';

interface DataType {
  key: number;
  name: string;
  message: string;
  userId?: number;
}

export default function Home() {

  const url = 'http://localhost:5000/chat';
  const [data, setData] = React.useState<DataType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        const tableData = response.data.map((item: any) => ({
          key: item.id,
          name: item.name,
          message: item.message,
        }));
        setData(tableData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    fetchData();
  }, []);

  const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Mensagem',
    dataIndex: 'message',
    key: 'message',
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
