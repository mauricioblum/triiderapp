import React, { Component } from 'react'
import { Container, Row, Col, Nav, Button, Modal } from 'react-bootstrap';
import './css/Orcamento.css';
import api from '../services/api';
import ReactStars from 'react-stars';

export default class Orcamento extends Component {
    state = {
        quotes: [],
        id_pedido: [],
    };


    async componentDidMount() {
        const response = await api.get('orders');

        this.setState({ quotes: response.data });
    }

    handleClick = async e => {




    }


    render() {
        const { open } = this.state;

        return (
            <Container>
                <div className="title">
                    <h3>Meus orçamentos</h3>
                </div>
                <Nav className="justify-content-end" variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Abertos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Finalizados</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Cancelados</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Container className="quotes">
                    <Row className="quote-row">
                        {this.state.quotes.map(quote => (
                            <div className="quote" key={quote.id}>
                                <h4>{quote.serviceName}</h4>
                                <p>{quote.createdAt}</p>
                                <p>Status: {quote.status}</p>
                                <hr />
                                    <Row className="fotos-orcamento" noGutters="true">
                                        {quote.quotes.map(img => (
                                            <Col key={img.id}>
                                                <img className="avatar-quote" alt="avatar" src={img.avatar} />
                                            </Col>
                                        ))}
                                    </Row>
                                <p>Você já tem {quote.quotes.length} orçamentos.</p>
                                <div><Button
                                    variant="primary"
                                    type="submit"
                                    value={quote.quotes}
                                    onClick={this.handleClick}
                                    aria-expanded={open}>VER ORÇAMENTOS
                        </Button>
                                </div>


                                {quote.quotes.map(pedido => (
                                    <div className="pedido" key={pedido.id}>
                                        <h4>{pedido.name}</h4>
                                        <div className="ratings">
                                        <ReactStars
                                        count={5}
                                        size={24}
                                        edit={false}
                                        value={pedido.stars}
                                        color2={'#ffd700'}>
                                        </ReactStars>
                                        
                                        </div>
                                        <span> ({pedido.ratings})</span>
                                        <p>{pedido.servicesDone} negócios fechados</p>
                                        
                                        <div><img className="avatar" alt="avatar" src={pedido.avatar} /></div>
                                        <h4>R$ {pedido.price}</h4>

                                        <Button>CONTRATAR</Button>
                                    </div>
                                ))}





                            </div>

                        ))}

                    </Row>

                </Container>



            </Container>
        )
    }
}
