import React, { Component } from 'react';
import { Button, Navbar ,Nav,Form,FormControl,Carousel } from 'react-bootstrap';

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
    this.handleLoginClick =this.handleLoginClick.bind(this);
    this.handleLogoutClick=this.handleLogoutClick.bind(this);
  }
  
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Cake App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
         
          </Nav>
          <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button type="button" variant="outline-success">Search</Button>
          &nbsp;
          {isLoggedIn
          ? <Button type="button" variant="outline-danger" onClick={this.handleLogoutClick}>Logout</Button>
          : <Button type="button" variant="outline-info" onClick={this.handleLoginClick}>Login</Button>
          }
          </Form>
      </Navbar.Collapse>
      </Navbar>
      
      <Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src="http://cssslider.com/sliders/demo-28/data1/images/scooter593155_1280.jpg"
alt="First slide" style={{height:"350px"}}
/>
<Carousel.Caption>
<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://wowslider.com/sliders/demo-91/data1/images/wild598302_1280.jpg"
alt="Second slide" style={{height:"350px"}}
/>

<Carousel.Caption>
<h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="http://www.ilovemanpower.com/images/slider/image1.jpg"
alt="Third slide" style={{height:"350px"}}
/>

<Carousel.Caption>
<h3>Third slide label</h3>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
 
  </div>
    );
  }
}

export default Header;