import React from "react";
import Footer from "../../commom/footer";
import { Breadcrumb, Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  return (
    <Layout className="layout">
      <div style={{ padding: 20 }}>
        <Title>Home View</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adip.</Text>
      </div>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div style={{ padding: 24, minHeight: 580, background: "#fff" }}>
          Content
        </div>
      </Content>

      <Footer />
    </Layout>
  );
};

export default Home;
