import React from 'react'
import { Layout } from 'antd'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

const { Content } = Layout

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <Dashboard />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App