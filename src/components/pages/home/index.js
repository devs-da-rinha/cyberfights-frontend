import React from "react";
import Footer from "../../commom/footer";
import { Breadcrumb, Layout } from 'antd';
const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <div style={{ padding: 20 }}>
        <h2>Home View</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      </div>
      <Content
        style={{
          padding: '0 50px'
        }}
      >
         <div style={{ padding: 24, minHeight: 580, background: '#fff' }}>Content</div>
      </Content>

      <Footer />
    </Layout>
  );
};

export default Home;
