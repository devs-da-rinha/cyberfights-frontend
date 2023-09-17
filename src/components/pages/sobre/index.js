import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../commom/container";
import Footer from "../../commom/footer";
import Header from "../../commom/header";

const Sobre = () => {
  return (
    <Layout className="layout">
      <Header />

      <Content style={{ padding: "0 50px" }}>
        <Container>
          <Title>Sobre Nós</Title>
          <Link to="/">retornar a página inicial</Link>
        </Container>
      </Content>

      <Footer />
    </Layout>
  );
};

export default Sobre;
