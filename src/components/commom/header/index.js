import { Button, Layout, Typography } from "antd";
import React from "react";
import "./style.css";

const HeaderAntd = Layout.Header;
const { Title } = Typography;

const Header = () => {
  return (
    <HeaderAntd className="bg-transparent flex items-center fixed w-full glass__header z-50">
        <a href="/"><div className="home__header--logo logo-img"></div></a>
        <div className="ms-auto justify-end">
          <Button className="header__btn login__btn bg-transparent outline outline-1 outline-white text-white" href="">Acesso</Button>
          <Button className="header__btn sign__btn ml-3 bg-white outline outline-1 outline-white text-black">Cadastro</Button>
        </div>
    </HeaderAntd>
  );
};

export default Header;
