import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class PageSection extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    returnPageSection() {
        switch (this.props.type) {
            case "Navigation": {
                return(
                    <>
                        <Navbar _key={this.props.key} bg="light" expand="lg">
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
                            </Navbar.Collapse>
                        </Navbar>
                    </>
                );
            }
            case "Heading": {
                return(<h1 _key={this.props.key} style={this.props.style}>{this.props.text}</h1>)
            }
            case "Divider": {
                return(<hr _key={this.props.key} style={this.props.style} />);
            }
            case "Image": {
                return(<img _key={this.props.key} src={this.props.url} alt={this.props.text} style={this.props.style} />)
            }
            case "Button": {
                return(<button _key={this.props.key} style={this.props.style}>{this.props.text}</button>)
            }
            case "Spacer": {
                return(<div _key={this.props.key} style={this.props.style}></div>);
            }
            case "Video": {
                return(
                    <video style={this.props.style} controls>
                        <source src={this.props.url} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                );
            }
            case "Icon": {
                return(<i className={this.props.faClassName} style={this.props.style} />)
            }
            default: {
                console.log("invalid or incomplete section!");
                break;
            }
        }

    }


    render() {
        return (
            <div className='page-section'>
                {this.returnPageSection()}
            </div>
        );
    }

}


export default PageSection;