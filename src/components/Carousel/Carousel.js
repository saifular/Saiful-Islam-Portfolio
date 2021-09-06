import React, {Component,Fragment}from 'react';
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import BG from '../../asset/images/Background.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class Carousel extends Component {


    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            autoplay:true,
            autoplaySpeed:3000,

     
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
      
        return (
            <Fragment>
            <Container className="text-center CarouselSaction">
                <h1 className="text-center serviceTitle">CLIENT SAYS</h1>
                <Row lg={12} md={12} sm={12}>
                    <Col>
                       <Slider {...settings}>
                           <div>
                           <img className="CircleImg" src={BG}/>
                           <h1 className="serviceName">
                               Web Development
                           </h1>
                           <p className="serviceDes text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                           </div>
                           <div>
                           <img className="CircleImg" src={BG}/>
                           <h1 className="serviceName">
                               Web Development
                           </h1>
                           <p className="serviceDes text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                           </div>
                           <div>
                           <img className="CircleImg" src={BG}/>
                           <h1 className="serviceName">
                               Web Development
                           </h1>
                           <p className="serviceDes text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                           </div>

                       </Slider>
                    </Col>
                </Row>
         

            </Container>
            </Fragment>
        );

    }
}
export default Carousel;