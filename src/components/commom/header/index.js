import { Button, Layout, Typography } from "antd";
import React from "react";
import { Layout, Row } from "antd";
import { Typography } from "antd";
import "./style.css";


const HeaderAntd = Layout.Header;
const { Title } = Typography;

const Header = () => {
  return (
    <HeaderAntd style={{ display: "flex", alignItems: "center" }}>
        <Title>CyberFights</Title>
        <div className="ms-auto justify-end">
          <Button href="">Acesso</Button>
          <Button className="ml-3">Cadastro</Button>
        </div>
        <div className="logo-img"></div>
    </HeaderAntd>
  );
};

export default Header;
