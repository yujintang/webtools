import { Layout, Menu, Icon } from 'antd'
import React from 'react'
import { connect } from 'dva';

const { Header, Content, Footer, Sider } = Layout;

const HomePage = ({menuList}) => {
  function changePage({item, key, selectedKeys}){
    console.log(item, key,selectedKeys)
  }
  let menu = []
  for(let i = 5; i<9; i++) {
    menu.push(<Menu.Item key = {i}>
      <Icon type="fire"/>
      <span className="nav-text">{i}</span>
      </Menu.Item>)
  }
  return (
    <Layout>
    <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
    <Header style={{background:'#808080', padding: 24 ,textAlign: 'center' }}>hello world</Header>
      <div className="homeList" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} onSelect={changePage} >
        {/* <Menu.Item key="1">
          <Icon type="fire" />
          <span className="nav-text">time</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="fire" />
          <span className="nav-text">ws</span>
        </Menu.Item> */}
        {menu}
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          ...
      <br />
          Really
      <br />...<br />...<br />...<br />
          long
          content
    </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
  </Footer>
    </Layout>
  </Layout>
  )
}
export default connect(({menuList})=>({menuList}))(HomePage);







