import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
const FooterAntd = Layout.Footer;

const Footer = () =>{
  return (
    <FooterAntd
        style={{
          textAlign: 'center',
        }}
      >
        <p>©2023 MegaBots</p>
        <Link to="/">Home</Link>
        <Link to="/termos-de-uso">Termos de Uso</Link>
        <Link to="/politica-de-privacidade">Política de Privacidade</Link>
        <Link to="/sobre">Sobre Nós</Link>

      </FooterAntd>
  );
}

export default Footer;