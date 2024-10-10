import React, { useState } from 'react'
import { Typography, Row, Col, Card, Statistic, Table, Input, Button, Space, Tag } from 'antd'
import { FileImageOutlined, VideoCameraOutlined, FileTextOutlined, GlobalOutlined, SearchOutlined } from '@ant-design/icons'

const { Title } = Typography
const { Search } = Input

const Dashboard = () => {
  const [searchText, setSearchText] = useState('')

  const stats = [
    { icon: <FileImageOutlined />, title: '图片总数', value: 12483 },
    { icon: <VideoCameraOutlined />, title: '视频总数', value: 5237 },
    { icon: <FileTextOutlined />, title: '文本总数', value: 18942 },
    { icon: <GlobalOutlined />, title: '网页总数', value: 3215 },
  ]

  const columns = [
    {
      title: '资源名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '图片数量',
      dataIndex: 'images',
      key: 'images',
      render: (value) => <span style={{ color: '#1890ff' }}>{value}</span>,
    },
    {
      title: '视频数量',
      dataIndex: 'videos',
      key: 'videos',
      render: (value) => <span style={{ color: '#52c41a' }}>{value}</span>,
    },
    {
      title: '文本数量',
      dataIndex: 'texts',
      key: 'texts',
      render: (value) => <span style={{ color: '#faad14' }}>{value}</span>,
    },
    {
      title: '网页数量',
      dataIndex: 'webpages',
      key: 'webpages',
      render: (value) => <span style={{ color: '#722ed1' }}>{value}</span>,
    },
    {
      title: '链接数量',
      dataIndex: 'links',
      key: 'links',
      render: (value) => <span style={{ color: '#eb2f96' }}>{value}</span>,
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === '重要') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '详情',
      key: 'details',
      render: (_, record) => (
        <Button type="primary" size="small" onClick={() => handleDetails(record)}>
          查看详情
        </Button>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      name: '产品目录',
      images: 250,
      videos: 15,
      texts: 500,
      webpages: 50,
      links: 150,
      tags: ['产品', '目录', '重要'],
    },
    {
      key: '2',
      name: '营销材料',
      images: 180,
      videos: 30,
      texts: 300,
      webpages: 25,
      links: 100,
      tags: ['营销', '广告'],
    },
    {
      key: '3',
      name: '技术文档',
      images: 50,
      videos: 5,
      texts: 1000,
      webpages: 100,
      links: 200,
      tags: ['技术', '文档', '重要'],
    },
    {
      key: '4',
      name: '社交媒体内容',
      images: 500,
      videos: 100,
      texts: 200,
      webpages: 10,
      links: 300,
      tags: ['社交', '媒体'],
    },
    {
      key: '5',
      name: '培训资料',
      images: 150,
      videos: 50,
      texts: 400,
      webpages: 30,
      links: 80,
      tags: ['培训', '教育'],
    },
  ]

  const handleSearch = (value) => {
    setSearchText(value)
    // Implement search logic here
    console.log('Searching for:', value)
  }

  const handleDetails = (record) => {
    // Implement details view logic here
    console.log('Viewing details for:', record.name)
  }

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: '24px' }}>资源统计仪表板</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        {stats.map((stat, index) => (
          <Col key={index} xs={24} sm={12} lg={6}>
            <Card hoverable style={{ height: '100%' }}>
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.prefix || stat.icon}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Card 
        title="资源详细统计" 
        extra={<a href="#">查看全部</a>}
        style={{ marginBottom: '24px', boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)' }}
      >
        <Space style={{ marginBottom: '16px' }}>
          <Search
            placeholder="搜索资源"
            allowClear
            enterButton="搜索"
            size="large"
            onSearch={handleSearch}
            style={{ width: 300 }}
          />
        </Space>
        <Table 
          columns={columns} 
          dataSource={data} 
          pagination={false}
        />
      </Card>
    </div>
  )
}

export default Dashboard