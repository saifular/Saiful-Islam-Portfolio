import React, {Component,Fragment}from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import '../../asset/css/custom.css' 
class Top extends Component {

    render() {
      
        return (
            <Fragment>
          
           <Container fluid className="topBanner">
             <div className="topBannerOverly">
                   <Container className="topContent">
                       <Row>
                           <Col className="text-center">
                           <h1 className="topTitle">
                               Software Enginner
                           </h1>
                           <h4 className="topSubTitle">
                               Mobile & Web Application
                           </h4>
                           <Button variant="primary">More Info</Button>
                           </Col>
                       </Row>
                   </Container>

               </div>


           </Container>
         
                
            </Fragment>
        );
    }
}
export default Top;