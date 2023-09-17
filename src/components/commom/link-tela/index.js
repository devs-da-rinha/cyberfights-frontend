import React from "react";
import { Link } from "react-router-dom";

const LinkTela = (props) => {
    const {caminho, texto} = props;

    return (
        <Link to={caminho} style={{
            color: "#fff"
        }}> {texto} </Link>
  );
};

export default LinkTela;
