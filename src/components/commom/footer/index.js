import React from "react";
import { Layout, Row } from "antd";
import { Space, Typography } from "antd";
import LinkTela from "../link-tela";
import LogoMB from "../../../logo-mb.svg";
import Logo from "../../../logo.svg";
import Divider from "../divider";

const FooterAntd = Layout.Footer;
const { Text } = Typography;

const Footer = () => {
  return (
    <FooterAntd
      style={{
        textAlign: "center",
        backgroundColor: "#0E2A3D",
      }}
    >
      <Row align={"center"}>
        <Space size="large">
          <img
            src={Logo}
            alt="Logo Cyber Fights"
            style={{
              height: "8vh",
            }}
          />

          <Divider type="vertical" />

          <img
            src={LogoMB}
            alt="Logo Empresa"
            style={{
              height: "8vh",
            }}
          />

          <LinkTela caminho="/" texto="Home" />
          <LinkTela caminho="/termos-de-uso" texto="Termos de Uso" />
          <LinkTela
            caminho="/politica-de-privacidade"
            texto="Política de Privacidade"
          />
          <LinkTela caminho="/sobre" texto="Sobre Nós" />
        </Space>
      </Row>
    </FooterAntd>
  );
};

export default Footer;
