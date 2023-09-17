import React from "react";
import { Breadcrumb, Layout, Menu, Row, theme } from "antd";
import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import LinkTela from "../link-tela";

const FooterAntd = Layout.Footer;
const { Text } = Typography;

const Footer = () => {
  return (
    <FooterAntd
      style={{
        textAlign: "center",
      }}
    >
      <Row align={"center"}>
        <Space size="middle">
          <Text>©2023 MegaBots</Text>
          <LinkTela caminho="/" texto="Home"/>
          <LinkTela caminho="/termos-de-uso" texto="Termos de Uso"/>
          <LinkTela caminho="/politica-de-privacidade" texto="Política de Privacidade"/>
          <LinkTela caminho="/sobre" texto="Sobre Nós"/>
        </Space>
      </Row>
    </FooterAntd>
  );
};

export default Footer;
