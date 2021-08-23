import React, {Component,Fragment}from 'react';
import NavBarMenu from '../components/Top/NavBarMenu';
import Top from '../components/Top/Top';
import Service from '../components/Services/Service';
import Analysis from '../components/Analysis/Analysis';
import Summary from '../components/Summary/Summary';
import Project from '../components/Projects/Project';
import Courses from '../components/Courses/Courses';
import Video from '../components/Video/Video';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';

class Homepage extends Component {

    render() {
      
        return (
            <Fragment>
                <NavBarMenu/>
                <Top/>
                <Service/>
                <Analysis/>
                <Summary/>
                <Project/>
                <Courses/>
                <Video/>
                <Carousel/>
                <Footer/>



        
          
             
            </Fragment>
       
        );
    }
}
export default Homepage;