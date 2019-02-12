import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './App.css';


import Orcamento from './components/Orcamento';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Container fluid className="nav-menu">

          <div className="logo">
          </div>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="/home">Início</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Catálogo de serviços</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Meus orçamentos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Mensagens</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Ajuda</Nav.Link>
            </Nav.Item>

          </Nav>

          <Orcamento />

          <Container fluid>
            <div className="footer">
              <Row>
                <Col>
                  <h3>E SE ALGO DER ERRADO?</h3>
                  <p>Conte com a nossa garantia contra danos de até R$ 5.000,00.</p>
                  <a href="/">SAIBA MAIS</a>
                </Col>
                <Col>
                  <h3>PROFISSIONAIS VERIFICADOS</h3>
                  <p>Verificamos <strong>antecentes criminais</strong>, referências profissionais e muito mais.</p>
                  <a href="/">SAIBA MAIS</a>
                </Col>
                <Col>
                  <h3>PAGAMENTO NA PLATAFORMA</h3>
                  <p>Pague em até 6x no seu cartão de crédito direto no app ou no site!</p>
                  <a href="/">SAIBA MAIS</a>
                </Col>
                <Col>
                  <h3>CENTRAL DE AJUDA</h3>
                  <p>Te ajudamos antes, durante ou depois do seu pedido, 24 horas por dia.</p>
                  <a href="/">SAIBA MAIS</a>
                </Col>
              </Row>
            </div>
          </Container>



          <div className="logo">
          </div>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link href="/">Central de Ajuda</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Termos de uso</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Código de conduta</Nav.Link>
            </Nav.Item>
          </Nav>


        </Container>
      </Container>

    );
  }
}

export default App;
