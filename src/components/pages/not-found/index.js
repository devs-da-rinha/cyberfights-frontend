import React from "react";
import { Layout, Typography } from "antd";

const { Title, Text } = Typography;

const NotFound = () => {
  return (
    <Layout style={{
      minHeight: 680,
    }}>
      <Title>404: Page Not Found</Title>
      <Text>Opa amigo essa página não existe</Text>
    </Layout>
  );
};

export default NotFound;
