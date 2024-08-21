import { Container, Row, Col, Carousel } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
import { Component } from 'react'
// pastasciutte è un array di 5 oggetti, ognuno rappresentante un piatto di pasta
import PastaReviews from './PastaReviews'
class Home extends Component {
  //memoria deel componente
  state = {
    activePasta: pastasciutte[0],
    // inizializzo lo stato con i valori iniziali
  }
 //le prop nei componenti a classe li troviamo nel this.props
 //attribute: tag = props:component
  render() {
    return (
      <Container>
        {/* un Container altro non è che un <div class="container"></div> */}
        <Row className="justify-content-center my-4">
          {/* col-12 col-md-6 col-lg-4 */}
          <Col xs={12} md={6} lg={4} className="text-center">
            <h2>Benvenuti a Epistaurant!</h2>
            <h4>Ristorante italiano dal 1970</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Carousel
            //aggiorno la pasta attiva con il meteodo di bootstrap di carosello- onslide.
              onSlide={(i) => {
                console.log('SLIDE CAMBIATA!', i)
                // la prossima activePasta è pastasciutte[i]
                // dobbiamo settare lo stato del componente Home con pastasciutte[i]
                // come nuova activeSlide
                // lo stato di un componente è READ-ONLY, in solo lettura. Possiamo leggerlo ma non cambiarlo. Per cambiare lo stato si 
                //utilizza setState.
                // per cambiare lo stato di un componente bisogna utilizzare un
                // metodo apposito, che si chiama "setState()"
                // setState si trova su "this"
                this.setState({
                  // questo è un NUOVO oggetto state, che verrà FUSO
                  // con lo stato corrente
                  activePasta: pastasciutte[i], //l'indice della slide che sta arrivando.
                })
              }}
            >
              {pastasciutte.map((pasta) => {
                return (
                  <Carousel.Item key={pasta.id}>
                    <img className="w-100" src={pasta.image} alt="pasta pic" />
                    <Carousel.Caption>
                      <h3>{pasta.name}</h3>
                      <p>{pasta.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
     
        <PastaReviews activePasta = {this.state.activePasta}/>
        {/*stiamo fornento a PastaReviews quale e la pasta activePasta. in questo caso activePasta e una prop */}

      </Container>
    )
  }
}

export default Home
