import React from "react";
import { Layout, Row } from "antd";
import { Typography } from "antd";
import "./style.css";

const HeaderAntd = Layout.Header;
const { Title } = Typography;

const Header = () => {
  return (
    <HeaderAntd style={{ display: "flex", alignItems: "center" }}>
        <div className="logo-img"></div>
    </HeaderAntd>
  );
};

export default Header;
