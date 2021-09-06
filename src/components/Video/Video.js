import React, {Component,Fragment}from 'react';
import {Container,Row,Col,Card,Modal,Button} from "react-bootstrap";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'video-react/dist/video-react.css';
import { Player ,BigPlayButton} from 'video-react';
import BG from '../../asset/images/Background.png'


class Video extends Component {
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})


    render() {
      
        return (
            <Fragment>
                <Container className="VideoSaction text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                        <Card className="VideoCard">
                            <h1 className="VideoTitle">How I Do</h1>
                            <p className="VideoDes">There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available.
                            </p>
                            <p><FontAwesomeIcon className="VideoPlay" onClick={this.modalOpen} icon={faPlayCircle}/></p>



                        </Card>

                        
                        </Col>
                    </Row>

                </Container>
                   <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                   <Modal.Body>
                   <Player  poster={BG}>
                      
                      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                      <BigPlayButton position="center" />
                   </Player>


                   </Modal.Body>
                   < Modal.Footer>
                   <Button variant="primary" onClick={this.modalClose}>
                      Close
                   </Button>
         
                   </Modal.Footer>
                   </Modal>
                
            </Fragment>
            
        );

    }
}
export default Video;