import React, {Component,Fragment}from 'react';
import {Container,Row,Col,Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

class Summary extends Component {


    render() {
      
        return (
            <Container fluid className="SummaryBanner SummarySection">
            <div className="SummaryBannerOverly">
                <Container className="text-center">
                    <Row >
                        <Col lg={8} md={6} sm={12}>
                            <Row className="CountSaction">
                            <Col>
                                <h1 className="SummaryTitle">

                                <CountUp start={0} end={100} duration={1}>
                                  {({ countUpRef, start }) => (
                                     <VisibilitySensor onChange={start} delayedCall>
                                       <span ref={countUpRef} />
                                   </VisibilitySensor>
                                
                                 
                                
                                    )}
                              </CountUp>



                                </h1>
                                <h4 className="SummarySubTitle">Projects </h4>
                                <hr className="bg-white w-25"/>
                            </Col>
                            <Col>
                                <h1 className="SummaryTitle">
                                <CountUp start={0} end={100} duration={1}>
                                  {({ countUpRef, start }) => (
                                     <VisibilitySensor onChange={start} delayedCall>
                                       <span ref={countUpRef} />
                                   </VisibilitySensor>
                                
                                 
                                
                                    )}
                              </CountUp>
                                      




                                </h1>
                                <h4 className="SummarySubTitle">Projects </h4>
                                <hr className="bg-white w-25"/>
                            </Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                          <Card className="WorkCard">
                             <Card.Body>
                               <Card.Title className="CartTitle text-justify">How I Work</Card.Title>
                                <Card.Text>
                                    <p className="CartSubTitle text-justify"> <FontAwesomeIcon className="IconBullet" icon={faCheckCircle}/> Requirement Gathering </p>
                                    <p className="CartSubTitle text-justify"> <FontAwesomeIcon className="IconBullet" icon={faCheckCircle}/> System Analysis</p>
                                    <p className="CartSubTitle text-justify"> <FontAwesomeIcon className="IconBullet" icon={faCheckCircle}/> Coding Testing</p>
                                    <p className="CartSubTitle text-justify"> <FontAwesomeIcon className="IconBullet" icon={faCheckCircle}/> Implementation</p>
                               
                                </Card.Text>

                               </Card.Body>
                         </Card>
                        
                        </Col>
                    </Row>
                   
                </Container>

            </div>





        </Container>
        );

    }
}
export default Summary;