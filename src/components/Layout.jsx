import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined, SmileOutlined } from "@ant-design/icons";

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
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/analysis">Professional Analysis</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/portfolio">Investment Portfolio</Link>
          </Menu.Item>

          <Menu.Item key="6" icon={<SmileOutlined />}>
            <Link to="/hobbies">Hobbies</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Outlet />
    </Layout>
  );
};

export default LayoutComponent;
