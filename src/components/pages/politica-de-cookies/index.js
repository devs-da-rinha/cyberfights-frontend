import React from "react";
import { Link } from "react-router-dom";
import { Layout, Typography } from "antd";
import Header from "../../commom/header";
import { Content } from "antd/es/layout/layout";
import Container from "../../commom/container";
import Footer from "../../commom/footer";

const { Title, Text } = Typography;

const Cookies = () => {
  return (
    <Layout className="layout">
      <Header />

      <Content style={{ padding: "0 50px" }}>
        <Container>
          <Title>Cookies</Title>
          <Link to="/">retornar a página inicial</Link>
        </Container>
      </Content>

      <Footer />
    </Layout>
  );
};

export default Cookies;
