import React, {Component,Fragment}from 'react';
import {Navbar,Nav} from "react-bootstrap";
import '../../asset/css/custom.css' 
import Navlogo from '../../asset/images/navlogo.svg'
import NavlogoScroll from '../../asset/images/navlogoScroll.svg'
class NavBarMenu extends Component {
    constructor(){
        super();
        this.state={
            NavTitle : "navBarTitle",
            Navlogo:[Navlogo],
            navVariant:"dark",
            navBarItem:"navBarItem",
            navBarItems:"navBarItems",
            navBarHomeTitle:"navBarHomeTitle"

        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',NavTitle: 'navBarTitleScroll',Navlogo:[NavlogoScroll],navBarItem:'navBarItemScroll',navBarItems:"navBarItemsScroll",navBarHomeTitle:"navBarHomeTitleScroll"})

        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',NavTitle: 'navBarTitle',Navlogo:[Navlogo],navBarItem:'navBarItem',navBarItems:"navBarItems",navBarHomeTitle:"navBarHomeTitle"})
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)

    }
    render() {
      
        return (
            <Fragment>
  
       <Navbar fixed="top" collapseOnSelect expand="lg" navVariant={this.state.navVariant} className={this.state.navBarItem}>
        <Navbar.Brand href="#home" className={this.state.NavTitle}> <img src={this.state.Navlogo}/>  Saiful Islam </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
  
        </Nav>
         <Nav>
        <Nav.Link className={this.state.navBarHomeTitle} href="#deets">Home</Nav.Link>
        <Nav.Link className={this.state.navBarItems} href="#deets">Portfolio</Nav.Link>
        <Nav.Link className={this.state.navBarItems} href="#deets">Services</Nav.Link>
        <Nav.Link className={this.state.navBarItems} href="#deets">Contact</Nav.Link>
        <Nav.Link className={this.state.navBarItems} href="#deets">About</Nav.Link>
        <Nav.Link className={this.state.navBarItems} href="#deets">CV</Nav.Link>
        </Nav>
         </Navbar.Collapse>
       </Navbar>
                
            </Fragment>
        );
    }
}
export default NavBarMenu;