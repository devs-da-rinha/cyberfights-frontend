import React from "react";
import Footer from "../../commom/footer";
import { Breadcrumb, Layout, Typography } from "antd";
import Container from "../../commom/container";
import Header from "../../commom/header";

const { Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  return (
    <Layout className="layout">
      <Header />

      <Content style={{ padding: "0 50px" }}>
        <Container>
          <div>
            <Title>Home</Title>
          </div>
        </Container>
      </Content>

      <Footer />
    </Layout>
  );
};

export default Home;
