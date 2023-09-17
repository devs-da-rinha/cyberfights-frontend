import React from "react";
import { Layout, Typography } from "antd";
import Header from "../../commom/header";
import Container from "../../commom/container";
import { Content } from "antd/es/layout/layout";
import Footer from "../../commom/footer";

const { Title, Text } = Typography;

const NotFound = () => {
  return (
    <Layout className="layout">
      <Header />

      <Content style={{ padding: "0 50px" }}>
        <Container>
          <Title>404: Page Not Found</Title>
          <Text>Opa amigo essa página não existe</Text>
        </Container>
      </Content>

      <Footer />
    </Layout>
  );
};

export default NotFound;
