import React from "react";
import Footer from "../../commom/footer";
import { Layout, Typography, Carousel, Card, Col, Row, Image, Collapse } from "antd";
import Container from "../../commom/container";
import Header from "../../commom/header";
import "./style.css";

const { Content } = Layout;
const { Title, Text } = Typography;
const { Meta } = Card;

const items = [
  {
    key: '1',
    label: 'Pergunta 1',
    children: <p>Resposta 1</p>,
  },
  {
    key: '2',
    label: 'Pergunta 2',
    children: <p>Resposta 2</p>,
  },
  {
    key: '3',
    label: 'Pergunta 3',
    children: <p>Resposta 3</p>,
  },
];

const Home = () => {
  return (
    <Layout className="layout">
      <Header />

      <Content id="landing-cta" className="rounded-b-3xl lvl1-color" style={{maxHeight: "19rem"}}>
          <Container className="min-h-0">
            <div id="landing-cta__content" className="mt-14">
              <div className="landing-cta__content--carousel">
                <Carousel id="carousel" className="text-center text-white">
                  <div className="carousel__slide">
                      <Title className="carousel__title">Bem-Vindo!</Title>
                      <Text className="carousel__desc">
                        Bem-vindo à Arena dos Robôs! Prepare-se para uma emocionante jornada no mundo da competição de luta de robôs.
                      </Text>
                  </div>
                  <div className="carousel__slide">
                      <Title className="carousel__title">A melhor competição</Title>
                      <Text className="carousel__desc w-3">
                        Neste palco de alta tecnologia, a criatividade e engenhosidade se encontram com a ferocidade da batalha. 
                        Aqui, os engenheiros e entusiastas de todo o mundo trazem à vida suas criações robóticas para enfrentar desafios de tirar o fôlego e provar sua destreza mecânica.
                      </Text>
                  </div>
                </Carousel>
              </div>
            </div>
          </Container>
      </Content>

      <section className="mt-14 mb-24">
        <Container className="main__section flex justify-center">
          <Title id="section__title--1" level={2} className="section__title text-center">Passo a Passo</Title>
          <Row gutter={24} className="section__content--1 flex justify-center mt-8">
            <Col className="section__content__card--1 flex justify-center">
              <Card
                hoverable
                style={{ width: 340 }}
                cover={<img alt="example" src="https://i.imgur.com/3Q8Q2ZP.png" />}
              >
                <Meta className="text-center" title="Passo 1" description="Escolha seu robô" />
              </Card>
            </Col>
            <Col className="section__content__card--1 flex justify-center">
              <Card
                hoverable
                style={{ width: 340 }}
                cover={<img alt="example" src="https://i.imgur.com/3Q8Q2ZP.png" />}
              >
                <Meta className="text-center" title="Passo 2" description="Escolha seu robô" />
              </Card>
            </Col>
            <Col className="section__content__card--1 flex justify-center">
              <Card
                hoverable
                style={{ width: 340 }}
                cover={<img alt="example" src="https://i.imgur.com/3Q8Q2ZP.png" />}
              >
                <Meta className="text-center" title="Passo 3" description="Escolha seu robô" />
              </Card>
            </Col>
          </Row>

        </Container>
      </section>

      <section className="mt-14 mb-24">
        <Container>
          <Title id="section__title--2" level={2} className="section__title text-center">Competições</Title>
          <Row gutter={30} className="section__content--2 flex justify-center items-center">
            <Col span={8} className="section__content__card--2 flex justify-center">
              <Row>
                <Col span={24} className="flex justify-center">
                  <Image
                    width={200}
                    src="https://i.imgur.com/3Q8Q2ZP.png"
                  />
                </Col>
                <Col span={24} className="flex justify-center mt-6">
                  <Title level={5} className="section__title text-center">asdoiuasobduahsidbahsidubha asoidu hasiduasi uasdha ishodiau hsiduhasi uahishd aoisudh aushdia hsduai so</Title>
                </Col>
              </Row>
            </Col>
            <Col span={8} className="section__content__card--2 flex justify-center">
              <Title className="section__title">VS</Title>
            </Col>
            <Col span={8} className="section__content__card--2 flex justify-center">
              <Row>
                <Col span={24} className="flex justify-center mb-6">
                  <Title level={5} className="section__title text-center">asdoiuasobduahsidbahsidubha asoidu hasiduasi uasdha ishodiau hsiduhasi uahishd aoisudh aushdia hsduai so</Title>
                </Col>
                <Col span={24} className="flex justify-center">
                  <Image
                    width={200}
                    src="https://i.imgur.com/3Q8Q2ZP.png"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>
      </section>

      <section className="mt-14 lvl1-color pb-20 text-white">
        <Container>
          <Title id="section__title--3" level={2} className="text-center mt-8">Perguntas Frequentes</Title>
          
          <Collapse items={items} defaultActiveKey={['1']} />
        </Container>
      </section>

      <Footer />
    </Layout>
  );
};

export default Home;
