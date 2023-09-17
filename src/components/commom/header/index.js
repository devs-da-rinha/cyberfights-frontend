import React from "react";
import { Layout, Row } from "antd";
import { Typography } from "antd";

const HeaderAntd = Layout.Header;
const { Title } = Typography;

const Header = () => {
  return (
    <HeaderAntd style={{ display: "flex", alignItems: "center" }}>
        <Title>Oieeee</Title>
    </HeaderAntd>
  );
};

export default Header;
