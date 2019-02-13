import React, { Component } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import '../App.css';



import Orcamento from '../components/Orcamento';

export default class Home extends Component {
  render() {
    return (
        <Container bsPrefix="graybg">
        <Container bsPrefix="nav-menu whitebg">

         
          <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/"> <div className="logo">
          </div></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse aria-controls="responsive-navbar-nav">
              <Nav fill className="justify-content-between">
                <Nav.Item>
                  <Nav.Link href="/">Início</Nav.Link>
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
        </Navbar.Collapse> 
          <Navbar.Text>Juliana</Navbar.Text>
                       
          
          </Navbar>
        </Container>

          <Orcamento />

          <Container bsPrefix="whitebg">
            <div className="footer">
              <Row>
                <Col>
                  <h4>E SE ALGO <strong>DER ERRADO?</strong></h4>
                  <p>Conte com a nossa garantia contra danos de até R$ 5.000,00.</p>
                  <a href="/">SAIBA MAIS</a>
                </Col>
                <hr className="vertical-line"/>
                <Col>
                  <h4>PROFISSIONAIS <strong>VERIFICADOS</strong></h4>
                  <p>Verificamos <strong>antecentes criminais</strong>, referências profissionais e muito mais.</p>
                  <a href="/">SAIBA MAIS</a>
                </Col>
                <hr className="vertical-line"/>
                <Col>
                  <h4>PAGAMENTO <strong>NA PLATAFORMA</strong></h4>
                  <p>Pague em até 6x no seu cartão de crédito direto no app ou no site!</p>
                  <a href="/">SAIBA MAIS</a>
                </Col>
                <hr className="vertical-line"/>
                <Col>
                  <h4>CENTRAL DE <strong>AJUDA</strong></h4>
                  <p>Te ajudamos antes, durante ou depois do seu pedido, 24 horas por dia.</p>
                  <a href="/">SAIBA MAIS</a>
                </Col>
              </Row>
            </div>
          </Container>


      <div className="breadcrumbs">
      
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
      </div>


        
      </Container>
    )
  }
}
