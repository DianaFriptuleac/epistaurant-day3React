import { Row, Col, ListGroup } from "react-bootstrap"
//dentro props troveremo activePasta, il dato passato da Home
const PastaReviews = function(props){
    return(
        <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <ListGroup className="text-center"> 
            {props.activePasta.comments.map((c) => { //creo una lista; this.state legge i commenti e li cicla per ogni pasta un cpmmento e una recensione diversa
              return (
                <ListGroup.Item key={c.id}>  
                  {c.rating} | {c.comment}  {/**ex 5 | fantastica */}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    )
}
export default PastaReviews