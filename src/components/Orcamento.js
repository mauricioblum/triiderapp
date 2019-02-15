import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Modal,
  Navbar
} from "react-bootstrap";
import "./css/Orcamento.css";
import api from "../services/api";
import Pedido from "./Pedido";

export default class Orcamento extends Component {
  state = {
    orders: [],
    pedidos: [],
    status: "",
    filteredOrders: [],
    show: false
  };

  async componentDidMount() {
    const response = await api.get("orders");

    this.setState({ orders: response.data });

    this.handleFilter("");
  }

  handleClose = async () => {
    await this.setState({ show: false });
  };

  handleShow = async quotes => {
    await this.setState({
      show: true,
      pedidos: quotes
    });
  };

  handleFilter = status => {
    this.setState({
      status: status,
      filteredOrders: this.state.orders.filter(order => order.status === status)
    });
  };

  render() {
    return (
      <Container>
        <Row className="menu">
          <Navbar collapseOnSelect expand="lg" className="justify-content-end">
            <Navbar.Brand href="#home">MEUS ORÇAMENTOS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse aria-controls="responsive-navbar-nav">
              <Nav.Item>
                <Button
                  bsPrefix="btn quote-button"
                  type="button"
                  value=""
                  onClick={e => {
                    this.handleFilter(e.target.value);
                  }}
                >
                  Abertos
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  bsPrefix="btn quote-button"
                  type="button"
                  value="finalizado"
                  onClick={e => {
                    this.handleFilter(e.target.value);
                  }}
                >
                  Finalizados
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  bsPrefix="btn quote-button"
                  type="button"
                  value="cancelado"
                  onClick={e => {
                    this.handleFilter(e.target.value);
                  }}
                >
                  Cancelados
                </Button>
              </Nav.Item>
            </Navbar.Collapse>
          </Navbar>
        </Row>

        <Container bsPrefix="quotes">
          <Row>
            {this.state.filteredOrders.map(order => (
              <Col key={order.id} lg={4} md={6}>
                <div className="quote">
                  <h4 className="max">{order.serviceName}</h4>
                  <p className="date">
                    Validade:{" "}
                    {Number(order.createdAt.substr(8, 2)) +
                      5 -
                      new Date().getDate()}{" "}
                    dias
                  </p>
                  <div className={order.status}>
                    <p id="status" className="status-label">
                      {order.status}
                    </p>
                  </div>
                  <hr />

                  <Row className="fotos-orcamento">
                    {order.quotes.map(img => (
                      <Col key={img.id}>
                        <img
                          className="avatar-quote"
                          alt="avatar"
                          src={img.avatar}
                        />
                      </Col>
                    ))}
                  </Row>
                  <p>Você já tem {order.quotes.length} orçamentos!</p>

                  <Button
                    className="quote-seeButton"
                    variant="warning"
                    type="submit"
                    onClick={() => {
                      this.handleShow(order.quotes);
                    }}
                  >
                    VER ORÇAMENTOS
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ORÇAMENTOS RECEBIDOS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Pedido data={this.state.pedidos} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Voltar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
