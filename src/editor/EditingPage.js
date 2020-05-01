import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class EditingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
        }
    }


    returnPage() {
        try {
            console.log(this.props.page);
            let page = [];
            for (let index = 0; index < this.props.page.length; index++) {
                let section = this.props.page[index];
                switch (section.type) {
                    case "Navigation": {
                        console.log("navigation added, now rendering")
                        page.push(
                            <>
                                <Navbar bg="light" expand="lg">
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
                        break;
                    }
                    case "Heading": {
                        page.push(<h1 key={index} style={section.style[0]}>{section.text}</h1>)
                        break;
                    }
                    case "Divider": {
                        page.push(<hr key={index} style={section.style[0]} />);
                        break;
                    }
                    case "Image": {
                        page.push(<img key={index} src={section.url} alt={section.text} style={section.style[0]} />)
                        break;
                    }
                    case "Button": {
                        page.push(<button key={index} style={section.style[0]}>{section.text}</button>)
                        break;
                    }
                    case "Spacer": {
                        page.push(<div key={index} style={section.style[0]}></div>);
                        break;
                    }
                    case "Video": {
                        page.push(
                            <video style={section.style[0]} controls>
                                <source src={section.url} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        );
                        break;
                    }
                    case "Icon": {
                        page.push(<i className={section.faClassName} style={section.style[0]} />)
                        break;
                    }
                    default: {
                        console.log("Not a heading!");
                        break;
                    }
                }

            }
            return page;
        } catch (error) {

        }
    }

    render() {
        return (
            <>
                {this.returnPage()}
            </>
        );
    }
}

export default EditingPage;