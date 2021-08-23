import React, {Component,Fragment}from 'react';
import {Container,Row,Col} from "react-bootstrap";
import { faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faEnvelopeSquare,faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Footer extends Component {


    render() {
      
        return (
            <Fragment>
                <Container fluid={true} className="text-center FooterSaction">
                    <Row className="text-center ml-5">
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Folloow Me</h1>
                            <a className="SocialLink" href="#"><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                            <a className="SocialLink" href="#"><FontAwesomeIcon icon={faYoutube}/> YouTube</a>
                            
                        
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify ">
                        <h1 className="serviceName">Address</h1>
                            <p className="serviceDes text-justify">68/1 Kadamtola, Basabo, Dhaka 1214</p>
                            <p className="serviceDes text-justify"><a href="#" className="FooterLink"><FontAwesomeIcon icon={faEnvelope}/> byteroni@gmail.com</a></p>
                            <p className="serviceDes text-justify"><FontAwesomeIcon icon={faPhone}/> 01717130337</p>
                        
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="serviceName">Information</h1>
                            <a className="FooterLink" href="#">About me</a><br/>
                            <a className="FooterLink" href="#">My Resume</a><br/>
                            <a className="FooterLink" href="#">Contact me</a>
                        
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="serviceName">Legal</h1>
                            <a className="FooterLink" href="#">Refund Policy</a><br/>
                            <a className="FooterLink" href="#">Terms & Condition</a><br/>
                            <a className="FooterLink" href="#">Privacy Policy</a>
                        
                        </Col>
                    </Row>

                </Container>
                <Container fluid className="text-center CopyRightSaction">
                    <Row>
                        <Col className="CopyRightLink">
                           <a> Saiful Islam © Right 2020-2021 </a>
                        </Col>
                    </Row>
                </Container>
          

            </Fragment>
        );

    }
}
export default Footer;