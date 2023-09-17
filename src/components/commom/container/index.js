import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const Container = (props) => {
  const { children } = props;

  return (
    <Content
      style={{
        backgroundColor: "#485356",
        padding: "0 50px",
        minHeight: 580,
        
      }}
    >
      {children}
    </Content>
  );
};

export default Container;
