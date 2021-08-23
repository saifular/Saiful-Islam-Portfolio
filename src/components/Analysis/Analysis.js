import React, {Component,Fragment}from 'react';
import {Container,Row,Col} from "react-bootstrap";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
class Analysis extends Component {
    constructor(){
        super();
        this.state={
            data:[
               {Technology:'ReactJs',Projects:'90'},
               {Technology:'Android',Projects:'60'},
               {Technology:'PHP',Projects:'50'},
               {Technology:'Bootstrap',Projects:'95'},
               {Technology:'Lumen',Projects:'50'},
               {Technology:'Express',Projects:'40'},
               {Technology:'Node',Projects:'50'},
               {Technology:'MongoDB',Projects:'70'}
            
            ]
        }
    }

    render() {
          var blue="rgba(0,115,230,0.8)"
        return (
            <Fragment>

                <Container>
                    <h1 className="serviceTitle text-center">
                        Technology Used
                    </h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                        <ResponsiveContainer width="100%" height="100%">
                           <BarChart width={150} height={40} data={this.state.data}>
                            <Bar dataKey="Projects" fill={blue}/>
                            <XAxis dataKey="Technology"/>
                            <Tooltip/>
                           </BarChart>
                       </ResponsiveContainer>
                        
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                         
                        </Col>

                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}
export default Analysis;