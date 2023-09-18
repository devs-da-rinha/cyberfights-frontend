import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const Container = (props) => {
  const { children } = props;

  return (
    <Content
      style={{
        padding: "0 50px",
      }}
    >
      {children}
    </Content>
  );
};

export default Container;
