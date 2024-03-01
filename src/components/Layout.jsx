import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SmileOutlined,
  ProjectOutlined,
  FundProjectionScreenOutlined,
  StockOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const LayoutComponent = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/aboutme">About</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FundProjectionScreenOutlined />}>
            <Link to="/analysis">Professional Analysis</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<StockOutlined />}>
            <Link to="/portfolio">Investment Portfolio</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<SmileOutlined />}>
            <Link to="/hobbies">Hobbies</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<ProjectOutlined />}>
            <Link to="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<FileSearchOutlined />}>
            <Link to="/articles">Articles</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Outlet />
    </Layout>
  );
};

export default LayoutComponent;
