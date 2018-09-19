import React from 'react'
import{connect} from 'dva';
import ToolList from '../components/ToolList'

const WebTools = ({dispatch, tools})=>{
  function handleDelete(id){
    dispatch({
      type: 'tools/delete',
      payload: id,
    })
  }
  return (
    <div>
      <h2>
        list of tools
      </h2>
      <ToolList onDelete={handleDelete} tools={tools} />
    </div>
  )
}
export default connect(({ tools }) => ({
  tools,
}))(WebTools);