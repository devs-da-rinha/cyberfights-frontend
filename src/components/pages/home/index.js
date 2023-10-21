import React from "react";
import Footer from "../../commom/footer";
import {
  Layout,
  Typography,
  Carousel,
  Card,
  Col,
  Row,
  Image,
  Collapse,
} from "antd";
import Container from "../../commom/container";
import Header from "../../commom/header";
import "./style.css";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const items = [
  {
    key: "1",
    label: "Como posso inscrever meu robô na competição?",
    children: (
      <p>
        Para inscrever seu robô na competição, siga estes passos simples: <br />
        <br />
        <Paragraph>
          <ul>
            <li>
              <p>Crie uma conta em nossa plataforma.</p>
            </li>
            <li>
              <p>Acesse a seção de inscrições.</p>
            </li>
            <li>
              <p>
                Preencha as informações solicitadas sobre o seu robô e a equipe.
              </p>
            </li>
            <li>
              <p>
                Envie os documentos necessários, como especificações técnicas e
                fotos do seu robô.
              </p>
            </li>
            <li>
              <p>
                Aguarde a confirmação da sua inscrição e as informações sobre a
                competição.
              </p>
            </li>
          </ul>
        </Paragraph>
      </p>
    ),
  },
  {
    key: "2",
    label: "Como funciona a pontuação nas lutas de robôs?",
    children: (
      <p>
        A pontuação nas lutas de robôs varia de acordo com a categoria e as
        regras específicas da competição. Geralmente, a pontuação é baseada nos
        seguintes critérios:
        <br />
        <br />
        <Paragraph>
          <ul>
            <li>
              <p>Danos causados ao oponente.</p>
            </li>
            <li>
              <p>Controle e agressividade durante a luta.</p>
            </li>
            <li>
              <p>Tempo de imobilização do oponente.</p>
            </li>
            <li>
              <p>Estratégia e táticas utilizadas.</p>
            </li>
          </ul>
        </Paragraph>
      </p>
    ),
  },
  {
    key: "3",
    label: "O que acontece se meu robô for danificado durante uma luta?",
    children: (
      <p>
        Se seu robô for danificado durante uma luta, você terá a oportunidade de
        repará-lo dentro do limite de tempo estabelecido pelas regras da
        competição. É importante estar preparado com as ferramentas e peças de
        reposição necessárias. Lembre-se de que a rapidez e a eficiência na
        realização de reparos podem fazer a diferença entre a vitória e a
        derrota.
      </p>
    ),
  },
];

const Home = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content
        id="landing-cta"
        className="lvl1-color home__first--bg pt-20 h-auto"
      >
        <img src="../../../tech-lines.png" className="absolute rotate-270 opacity-20 left-0"/>
        <img src="../../../tech-lines.png" className="absolute rotate-90 opacity-20 right-0"/>
        <Container className="min-h-0">
          <div id="landing-cta__content" className="mt-14">
            <div className="landing-cta__content--carousel mb-10">
              <Carousel
                autoplay
                id="carousel"
                className="text-center text-white"
              >
                <div className="carousel__slide">
                  <Title className="carousel__title">Bem-Vindo!</Title>
                  <Text className="carousel__desc">
                    Bem-vindo à Arena dos Robôs! Prepare-se para uma emocionante
                    jornada no mundo da competição de luta de robôs.
                  </Text>
                </div>
                <div className="carousel__slide">
                  <Title className="carousel__title">A melhor competição</Title>
                  <Text className="carousel__desc w-3">
                    Neste palco de alta tecnologia, a criatividade e
                    engenhosidade se encontram com a ferocidade da batalha.
                    <br />
                    Aqui, os engenheiros e entusiastas de todo o mundo trazem à
                    vida suas criações robóticas para enfrentar desafios de
                    tirar o fôlego e provar sua destreza mecânica.
                  </Text>
                </div>
              </Carousel>
            </div>
          </div>
        </Container>
      </Content>
      <div className="home__first--bg2"></div>

      <section className="mt-14 mb-24">
        <Container className="main__section flex justify-center">
          <Title
            id="section__title--1"
            level={2}
            className="section__title text-center text-white"
          >
            Passo a Passo
          </Title>
          <Row
            gutter={24}
            className="section__content--1 flex justify-center mt-8"
          >
            <Col className="section__content__card--1 flex justify-center text-white">
              <Card
                hoverable
                style={{ width: 340 }}
                className="bg-black rounded-3xl border-black"
                cover={
                  <Image width={340} height={200} src="https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg" />
                }
              >
                <Meta
                  className="text-center text-white"
                  title="Passo 1"
                  description="Realize seu cadastro"
                />
              </Card>
            </Col>
            <Col className="section__content__card--1 flex justify-center">
              <Card
                hoverable
                style={{ width: 340 }}
                className="bg-black rounded-3xl border-black"
                cover={
                  <Image width={340} height={200} src="https://t3.ftcdn.net/jpg/02/88/80/38/360_F_288803822_0CJ8L3gr6w6nGnUeje6pCllCX7s986xz.jpg" />
                }
              >
                <Meta
                  className="text-center text-white"
                  title="Passo 2"
                  description="Inscreva-se nas competições"
                />
              </Card>
            </Col>
            <Col className="section__content__card--1 flex justify-center">
              <Card
                hoverable
                style={{ width: 340 }}
                className="bg-black rounded-3xl border-black"
                cover={
                  <Image width={340} height={200} src="https://t4.ftcdn.net/jpg/04/88/09/91/360_F_488099194_S41l188my3QP0S739qCFUqbq8ywKth21.jpg" />
                }
              >
                <Meta
                  className="text-center text-white"
                  title="Passo 3"
                  description="Acompanhe os resultados"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-14 mb-24">
        <Container>
          <Title
            id="section__title--2"
            level={2}
            className="section__title text-center"
          >
            Competições
          </Title>
          <Row
            gutter={30}
            className="section__content--2 flex justify-center items-center"
          >
            <Col
              span={8}
              className="section__content__card--2 flex justify-center"
            >
              <Row>
                <Col span={24} className="flex justify-center">
                  <Image width={200} src="../../../RoboVS1.png" />
                </Col>
                <Col span={24} className="flex justify-center mt-6">
                  <Title level={5} className="section__title text-center">
                    Explore as arenas, conheça os competidores, e mergulhe em
                    combates eletrizantes que desafiam os limites da engenharia
                    e estratégia.
                  </Title>
                </Col>
              </Row>
            </Col>
            <Col
              span={8}
              className="section__content__card--2 flex justify-center"
            >
              <Title className="section__title">VS</Title>
            </Col>
            <Col
              span={8}
              className="section__content__card--2 flex justify-center"
            >
              <Row>
                <Col span={24} className="flex justify-center mb-6">
                  <Title level={5} className="section__title text-center">
                    Se você é um ávido seguidor da robótica ou apenas está
                    curioso para descobrir esse universo repleto de adrenalina,
                    a Arena dos Robôs é o lugar perfeito para você.
                  </Title>
                </Col>
                <Col span={24} className="flex justify-center">
                  <Image width={200} src="../../../RoboVS2.png" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-14 lvl1-color pb-20 text-white">
        <Container>
          <Title
            id="section__title--3"
            level={2}
            className="text-center mt-8 mb-4"
          >
            Perguntas Frequentes
          </Title>

          <Collapse items={items} />
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default Home;
