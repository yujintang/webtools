import React from 'react'
import PropTypes from 'prop-types'
import {Table, Popconfirm, Button} from 'antd'

const ToolList = ({onDelete, tools}) =>{
  const columns = [{
    title: 'Name',
    dataIndex: 'name'
  },{
    title: 'Actions',
    render: (text, record) =>{
      return (
        <Popconfirm title="Delete?" onConfirm={()=> onDelete(record.id)}>
        <Button>Delete</Button>
        </Popconfirm>
      );
  },
  }]
  return (
    <Table
    dataSource={tools}
    columns={columns}
    />
  );

};

ToolList.propTypes ={
  onDelete: PropTypes.func.isRequired,
  tools: PropTypes.array.isRequired,
}

export default ToolList