import React, {Component,Fragment}from 'react';
import {Container,Row,Col} from "react-bootstrap";
import '../../asset/css/custom.css' 
import web from '../../asset/images/web.svg'
import mobile from '../../asset/images/mobile.svg'
import graphics from '../../asset/images/graphics.svg'
class Service extends Component {

    render() {
      
        return (
            <Fragment>
  
           <Container>
              <h1 className="text-center serviceTitle">
                  My Services
              </h1>
             <Row>
                 <Col lg={4} md={6} sm={12}>
                 <div className="serviceCard text-center">
                 <img src={web}/>

                   <h2 className="serviceName">
                       Web App Development
                   </h2>

                    <p className="serviceDes text-justify">
                       i am very good,i am very good,i am very good, i am very good,i am very good,i am very good
                   </p>
                   </div>
                </Col>

                <Col lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">
                <img src={mobile}/>

                  <h2 className="serviceName">
                    Mobile App Development
                  </h2>

                  <p className="serviceDes text-justify" >
                       i am very good,i am very good,i am very good, i am very good,i am very good,i am very good
                  </p>
                  </div>
                </Col>

                <Col lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">

                <img src={graphics}/>

                  <h2 className="serviceName">
                    Grapics Design
                      
                 </h2>

                  <p className="serviceDes text-justify">
                       i am very good,i am very good,i am very good, i am very good,i am very good,i am very good
                   </p>
                   </div>
                </Col>

             </Row>




           </Container>
         
                
            </Fragment>
        );
    }
}
export default Service;