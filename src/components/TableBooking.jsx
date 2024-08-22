//questo componente renderizzera un form per la prenotazione del tavolo da parte dei clienti
//spoiler: questo componente per poter fare funzionare corettamente il form, avra bisogno di uno STATO
import { Component } from "react";
import { Container, Row, Col, Form, FormGroup, FormLabel, FormSelect, Button, Alert } from "react-bootstrap";

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
       name:'',  //proprieta dello stato
       phone: '',
       numberOfPeple: 1,
       smoking: false,
       dateTime: '',
       specialRequests: '',
    }
}

//Funzione chhe possiamo ricchiamare x ogni input

handleChange = (e, proprety) =>{
    this.setState({
        reservation:{
            ...this.state.reservation,
            [proprety]: e.target.value  //prprety tra [], e una square braket notation
            //proprety e una stringa che arriva al invocazione del metodo all'interno di onChange dei input che potrebbe essere : name,phone ect.
             // per poter "calcolare" il valore di property ed utilizzarlo come
        // nome della proprietà del nuovo oggetto reservation, lo utilizziamo
        // tramite le [ ] sfruttando la "square brackets notation"
        }
    })
}


handleSubmit = (e) => {
    e.preventDefault()
    // ora inviamo i dati alle API di EPICODE per salvare la prenotazione
    // inviamo i dati tramite una chiamata con metodo 'POST'
    fetch('https://striveschool-api.herokuapp.com/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.reservation),
    })
      .then((response) => {
        if (response.ok) {
          console.log('prenotazione salvata')
          alert('grazie!')
          // dobbiamo svuotare i campi!
          // per farlo resettiamo lo stato, così i campi si svuoteranno da soli
          this.setState({
            reservation: {
              // lo stato iniziale del componente
              name: '',
              phone: '',
              numberOfPeople: '1',
              smoking: false,
              dateTime: '',
              specialRequests: '',
            },
          })
        } else {
          alert('riprova più tardi')
          throw new Error('errore!')
        }
      })
      .catch((err) => {
        alert(err)
      })
  }

  // METODO ALTERNATIVO DI GESTIONE PROMISE CON ASYNC/AWAIT
  //   handleSubmitAsyncAwait = async (e) => {
  //     e.preventDefault()
  //     // ora inviamo i dati alle API di EPICODE per salvare la prenotazione
  //     // inviamo i dati tramite una chiamata con metodo 'POST'

  //     try {
  //       const response = await fetch(
  //         'https://striveschool-api.herokuapp.com/api/reservation',
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(this.state.reservation),
  //         }
  //       )

  //       console.log('response', response) // funziona!

  //       if (response.ok) {
  //         console.log('prenotazione salvata')
  //         alert('grazie!')
  //         // dobbiamo svuotare i campi!
  //         // per farlo resettiamo lo stato, così i campi si svuoteranno da soli
  //         this.setState({
  //           reservation: {
  //             // lo stato iniziale del componente
  //             name: '',
  //             phone: '',
  //             numberOfPeople: '1',
  //             smoking: false,
  //             dateTime: '',
  //             specialRequests: '',
  //           },
  //         })
  //       } else {
  //         alert('riprova più tardi')
  //         throw new Error('errore!')
  //       }
  //     } catch (error) {
  //       // questo è un po' come il .catch() che avevate dopo il .then()
  //       console.log(error)
  //     }
  //   }

render(){
    return(
 <Container>
 <Row className="justify-content-center my-4">
 <Col xs={12} md={6}>
 <h2 className="text-center mb-3">Prenota un tavolo! </h2>
 <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="il tuo nome"  required
        //1). salviamo nello stato ogni lettera inserita 
        //con questo input dobbiamo riempire la proprieta "name" dentro reservation nello state
        //ad ogni variarione del inpur OnChange recupera lo stato
        onChange={(e) =>{
            console.log('scritto qualcosa', e.target.value)
            //l'unico modo per cambiare lo stato del componente e this.setState()
            this.setState({
                reservation:{
                    ...this.state.reservation, //mi copio la copia del mio veccho reservation
                    //lo spread operator ,o fa partire il mio oggetto reservation tutte le proprieta veccchie(non perdo nulla di quello che avevo prima)
                    name: e.target.value,
                }
            })
        }}
        //2). Colleghiamo l'interfaccia allo stato (il valore del input allo stato si fa con value(prop))
        value = {this.state.reservation.name}
        //ci serve xke vogliamo essere in grado di maneggiare il contento del input modificando lo stato

        />
        {/*Form.Control e il campo <input/> */} 
      </Form.Group>

      {this.state.reservation.name === 'Diana' && (<Alert variant='success'> Benvenuta Diana! </Alert>)}
      {/*a destra del alert troveremo sempre true e quello a sinistra che teremin
      la condizione e prima del &&. questo pezzo del DOM non esiste, nel nostro caso Alert, appare se la condizione e true */}

      
{this.state.reservation.name.length < 3 ? (
                <></>
              ) : this.state.reservation.name !== 'Maria' ? (
                <Alert variant="danger">Non hai indovinato il nome!</Alert>
              ) : (
                <Alert variant="success">Hai indovinato il nome!</Alert>
              )}


      <Form.Group className="mb-3">
        <Form.Label>Nr. telefono</Form.Label>
        <Form.Control type="tel" placeholder="Inserisci il tuo nr" required 
        onChange={(e) =>{
          //  this.setState({
          //      reservation: {
            //        ...this.state.reservation,
               //     phone: e.target.value
            //    }
           // })

           this.handleChange(e, "phone")
        }}
        value={this.state.reservation.phone}
        />
      </Form.Group>

        <FormGroup className="=mb-3">
        <FormLabel>Nr. di persone</FormLabel>
        <FormSelect required onChange={e =>{
            this.setState({
                reservation: {
                    ...this.state.reservation,
                    numberOfPeple: e.target.value
                }
            })
        }}
        value={this.state.reservation.numberOfPeple}>
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
                <Form.Check type="checkbox" label="Tavolo fumatori?" 
                onChange={(e) =>{
                    this.setState({
                        reservation:{
                            ...this.state.reservation,
                            smoking:e.target.checked   //event.targhet.value tornerebbe on o of invece target.checked- true o false
                        }
                    })
                }}
                checked={this.state.reservation.smoking}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quando volete venire?</Form.Label>
                <Form.Control type="datetime-local" required
                onChange={(e) =>{
                  //  this.setState({
                   //     reservation: {
                    //        ...this.state.reservation,
                    //        dateTime: e.target.value
                    //    }
                   // })
                   this.handleChange(e, "dateTime")
                }}
                value={this.state.reservation.dateTime}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Allergie/bambini/animali?</Form.Label>
                <Form.Control as="textarea" rows={5} 
                    onChange={(e) =>{
                        this.setState({
                            reservation: {
                                ...this.state.reservation,
                                specialRequests: e.target.value
                            }
                        })
                    }}
                    value={this.state.reservation.specialRequests}/>
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