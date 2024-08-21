//questo componente renderizzera un form per la prenotazione del tavolo da parte dei clienti
//spoiler: questo componente per poter fare funzionare corettamente il form, avra bisogno di uno STATO
import { Component } from "react";
import { Container, Row, Col, Form, FormGroup, FormLabel, FormSelect, Button } from "react-bootstrap";

//sara composto da un form
// per i campi, decide il backender:
//name-->string
//nr tel --> string/nr
//numberOfPeople --> nr/ string
///smoking--> boolena
// dateTime --> string(ISO Date)
// specialRequests --> (opzionale) string

class TableBooking extends Component {
state = {
    //deve solo chiamarsi 'state' l'ogetto ma il nome, in questo caso 'reservation' e a nostra scelta
    reservation: {
       // lo sato iniziale del componente
       //che in questo caso e lo stato iniziale del form 
        //i valori iniziali del form (come si presentail form)
       name:'',
       phone: '',
       numberOfPeple: 1,
       smoking: false,
       dateTime: '',
       specialRequests: '',
    }
}
render(){
    return(
 <Container>
 <Row className="justify-content-center my-4">
 <Col xs={12} md={6}>
 <h2 className="text-center mb-3">Prenota un tavolo! </h2>
 <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="il tuo nome"  required
        //1. salviamo nello stato ogni lettera inserita 
        //con questo input dobbiamo riempire la proprieta "name" dentro reservation nello state

        onChange={(e) =>{
            console.log('scritto qualcosa', e.target.value)
            //l;unico modo per cambiare lo stato del componente e this.setState()
            this.setState({
                reservation:{
                    name: e.target.value,
                }
            })
        }}
        />
        {/*Form.Control e il campo <input/> */} 
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nr. telefono</Form.Label>
        <Form.Control type="tel" placeholder="Inserisci il tuo nr" required />
      </Form.Group>

        <FormGroup className="=mb-3">
        <FormLabel>Nr. di persone</FormLabel>
        <FormSelect required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </FormSelect>
        </FormGroup>
        <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Tavolo fumatori?" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quando volete venire?</Form.Label>
                <Form.Control type="datetime-local" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Allergie/bambini/animali?</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>

              <Button variant="success" type="submit">
                Invia!
              </Button>
    </Form>
 </Col>
 </Row>
 </Container>

    )
}

}
export default TableBooking