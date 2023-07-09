import "./App.css";
import Users from "./components/Users";

import Albums from "./components/Albums";
import Photos from "./components/Photos";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Space } from "antd";
const { Header, Footer, Content } = Layout;

export default function App() {
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "50px",
    color: "#fff",
    backgroundColor: "#282c34",
  };
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <Routes>
            <Route exact path="/hw26.1" element={<Users />} />
            <Route path="/hw26.1/albums/:userId" element={<Albums />} />
            <Route
              path="/hw26.1/albums/:userId/photos/:albumId"
              element={<Photos />}
            />
          </Routes>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
}
