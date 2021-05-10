import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import ColumnSearchProps from './ColumnSearchProps'


const  Antdsearch=()=> {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  type DataType= {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const data : DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      name: 'Jim Red',
      age: 42,
      address: 'London No. 2 Lake Park',
    }
  ];

 

  function handleSearch(selectedKeys:any, confirm:any, dataIndex:any) {
    confirm();
    debugger;
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  function handleReset(clearFilters:any) {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...ColumnSearchProps<DataType>()
      ,
      render: (text:any, record:any) => (
       
        <Space size="middle">
          <a href="/antd"  >{record.name}</a>
          {/* <Link to="/antd">{record.name}</Link> */}
        </Space>
      ),
      
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...ColumnSearchProps<DataType>()
    },
    {
      title: 'Address',
      key: 'address',
      render: (text:any, record:any) => (
       
        <Space size="middle">
          <a>Invite {record.address}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;

}

export default Antdsearch;