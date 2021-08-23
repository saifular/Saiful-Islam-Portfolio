import React, {Component,Fragment}from 'react';
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import BG from '../../asset/images/Background.jpg'


class Projects extends Component {


    render() {
      
        return (
            <Fragment>
            <Container>
            <h1 className="text-center serviceTitle">
                  Recent Ptojects
              </h1>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                       <Card className="ProjectCard">
                       <Card.Img variant="top" src={BG} />
                       <Card.Body>
                       <Card.Title className="ProjectCardTitle text-center">Card Title</Card.Title>
                       <Card.Text className="ProjectCardDes">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                       </Card.Text>
                       <div className="text-center"><Button variant="primary">Details</Button></div>
                       </Card.Body>
                       </Card>
                        
                    
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                       <Card className="ProjectCard">
                       <Card.Img variant="top" src={BG} />
                       <Card.Body>
                       <Card.Title className="ProjectCardTitle text-center">Card Title</Card.Title>
                       <Card.Text className="ProjectCardDes">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                       </Card.Text>
                       <div className="text-center"><Button variant="primary">Details</Button></div>
                       </Card.Body>
                       </Card>
                        
                    
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                       <Card className="ProjectCard">
                       <Card.Img variant="top" src={BG} />
                       <Card.Body>
                       <Card.Title className="ProjectCardTitle text-center">Card Title</Card.Title>
                       <Card.Text className="ProjectCardDes">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                       </Card.Text >
                       <div className="text-center"><Button variant="primary">Details</Button></div>
                    
                       </Card.Body>
                       </Card>
                    
                    </Col>

                </Row>

            </Container>
            </Fragment>
        );

    }
}
export default Projects;