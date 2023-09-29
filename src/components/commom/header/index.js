import { Button, Layout, Typography } from "antd";
import React from "react";

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
    </HeaderAntd>
  );
};

export default Header;
