import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography } from "antd";

const { Title, Text } = Typography;

const Cookies = () => {
    return (
        <div>
            <Title>Cookies</Title>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default Cookies;