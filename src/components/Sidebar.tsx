import React from 'react'
import { Layout, Menu } from 'antd'
import { HomeOutlined, BarChartOutlined, TeamOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons'

const { Sider } = Layout

const Sidebar = () => {
  const navItems = [
    { key: 'home', icon: <HomeOutlined />, label: 'Home' },
    { key: 'analytics', icon: <BarChartOutlined />, label: 'Analytics' },
    { key: 'team', icon: <TeamOutlined />, label: 'Team' },
    { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
  ]

  return (
    <Sider width={200} theme="dark">
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu
        mode="inline"
        defaultSelectedKeys={['home']}
        style={{ height: '100%', borderRight: 0 }}
        items={navItems}
      />
      <Menu
        mode="inline"
        selectable={false}
        style={{ position: 'absolute', bottom: 0, width: '100%' }}
        items={[
          { key: 'logout', icon: <LogoutOutlined />, label: 'Logout' },
        ]}
      />
    </Sider>
  )
}

export default Sidebar