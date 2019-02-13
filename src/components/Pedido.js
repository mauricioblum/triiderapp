import React, { Component } from 'react';
import ReactStars from 'react-stars';
import { Button, Col, Row, Container } from 'react-bootstrap';
import './css/Pedido.css';



export default class Pedido extends Component {


  render() {
    return (
      <Container>


        <Row>


          {this.props.data.map(pedido => (
            <Col key={pedido.id}>

              <div className="pedido" >
                <div className="hired">
                  {(pedido.hired ? <p>CONTRATADO</p> : "")}
                </div>
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
                <h4 className="preco">R$ {pedido.price}</h4>
                <hr />

                <Button className="hire-btn">CONTRATAR</Button>
              </div>
            </Col>

          ))
          }
        </Row>
      </Container>
    )
  }
}