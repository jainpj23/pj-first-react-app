
import { Button, Navbar ,Nav,NavDropdown,Form,FormControl,Carousel } from 'react-bootstrap'

function Header(){
    
        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
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

export default Header;