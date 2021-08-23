import React, {Component,Fragment}from 'react';
import {Container,Row,Col} from "react-bootstrap";
import BG from '../../asset/images/Background.jpg'


class Courses extends Component {


    render() {
      
        return (
            <Fragment>
            <Container className="CoursesMarginTop">
            <h1 className="text-center serviceTitle">
                  Our Courses
              </h1>
                <Row>
                    <Col lg={6} md={12} sm={12} >
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="CoursesSaction" src={BG}/>
                            
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h4 className="CoursesTitle">Web Development</h4>
                                <p className="text-justify CoursesDes">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                <a className="CoursesDetails" href="#">Details</a>
                            
                            </Col>

                        </Row>
                     
                        
                    
                    </Col>
                    <Col lg={6} md={12} sm={12} >
                    <Row>
                            <Col lg={6} md={6} sm={12}>
                            <img className="CoursesSaction" src={BG}/>
                            
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                            <h4 className="CoursesTitle">Web Development</h4>
                            <p className="text-justify CoursesDes">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <a className="CoursesDetails" href="#">Details</a>
                            
                            </Col>

                        </Row>
                     
                        
                    
                    </Col>

                </Row>
                <Row>
                    <Col className="mt-4" lg={6} md={12} sm={12} >
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="CoursesSaction" src={BG}/>
                            
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h4 className="CoursesTitle">Web Development</h4>
                                <p className="text-justify CoursesDes">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                <a className="CoursesDetails" href="#">Details</a>
                            
                            </Col>

                        </Row>
                     
                        
                    
                    </Col>
                    <Col className="mt-4" lg={6} md={12} sm={12} >
                    <Row>
                            <Col lg={6} md={6} sm={12}>
                            <img className="CoursesSaction" src={BG}/>
                            
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                            <h4 className="CoursesTitle">Web Development</h4>
                            <p className="text-justify CoursesDes">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <a className="CoursesDetails" href="#">Details</a>
                            
                            </Col>

                        </Row>
                     
                        
                    
                    </Col>

                </Row>

            </Container>
            </Fragment>
        );

    }
}
export default Courses;