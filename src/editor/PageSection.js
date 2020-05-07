import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Toast from 'react-bootstrap/Toast';


class PageSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            border: undefined,
        }
    }

    // componentDidMount() {
    //     if (this.props.active === this.props.index || this.state.border === "1px solid green") {
    //         this.setState({ border: "1px solid green" })
    //     }
    //     else {
    //         this.setState({border: "hidden"});
    //     }
    // }

    /**
     * This method processes the columns in a row and returns their react component/HTML representation.
     */
    returnColumns() {
        let result = [];
        for (let index = 0; index < this.props.columns.length; index++) {
            const element = this.props.columns[index];
            result.push(
                <Col>
                    {this.returnPageSection(element.type)}
                </Col>
            )
        }
        return result;
    }

    /**
     * This method creates am embedded react Youtube video component
     * @param {string} url the url of the Youtube video
     * @param {string} height the height of the Youtube Video
     * @param {string} width the width of the Youtube Video
     * @param {boolean} autoplay autoplay
     * @param {boolean} loop loop
     */
    returnYouTube(url, height, width, autoplay, loop) {
        var videoID = "";
        var splitURL;
        if (url.includes("watch")) {
            splitURL = url.split("=");
            videoID = splitURL[1]
        }
        else {
            splitURL = url.split("/");
            videoID = splitURL[3]
        }

        const opts = {
            height: height,
            width: width,
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: autoplay,
                loop: loop,
            },
        };

        return (
            <YouTube
                videoId={videoID}
                opts={opts}
                onReady={this._onReady}
            />)
    }

    /**
     * This method renders a page section onto the screen based on its type in the JSON file.
     * @param {string} type 
     */
    returnPageSection(type) {
        //console.log(this.props);
        switch (type) {
            case "Navigation": {
                return (
                    <Navbar key={this.props.index} bg="light" expand="lg" style={{ width: this.props.style.width }}>
                        <Navbar.Brand href="#home" style={{ position: this.props.style.position, top: this.props.style.top }}>React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" style={{
                            alignItems: this.props.style.alignItems,
                            justifyContent: this.props.style.justifyContent
                        }}>
                            <Nav >
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
                );
            }
            case "Heading": {
                return (<h1 key={this.props.index} style={this.props.style}>{this.props.text}</h1>)
            }
            case "Divider": {
                return (<hr key={this.props.index} style={this.props.style} />);
            }
            case "Image": {
                return (<img key={this.props.index} src={this.props.url} alt={this.props.text} style={this.props.style} />)
            }
            case "Button": {
                return (<button key={this.props.index} style={this.props.style}>{this.props.text}</button>)
            }
            case "Spacer": {
                return (<div key={this.props.index} style={this.props.style}></div>);
            }
            case "Row": {
                return (
                    <Row key={this.props.index} style={{ width: "100%", }}>
                        {this.returnColumns()}
                    </Row>
                )
            }
            case "Video": {
                return (
                    <div style={{ backgroundColor: this.props.style.backgroundColor }}>
                        <div key={this.props.index} style={this.props.style}>
                            {this.returnYouTube(
                                this.props.url,
                                this.props.style["height"],
                                this.props.style["width"],
                                this.props.autoplay,
                                this.props.loop)}
                        </div>
                    </div>
                );
            }
            case "Icon": {
                return (<i key={this.props.index} className={this.props.faClassName} style={this.props.style} />)
            }
            case "ButtonGroup": {
                return (
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">Left</Button>
                        <Button variant="secondary">Middle</Button>
                        <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                )
            }
            case "Card": {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1473425021274-58232d06e88b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                      </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                )
            }
            case "Carousel": {
                return (
                        <Carousel indicators={false} style={{ width: this.props.style.width }}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://images.unsplash.com/photo-1474770337042-bd7e2ccb4f39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://images.unsplash.com/photo-1474770337042-bd7e2ccb4f39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://images.unsplash.com/photo-1474770337042-bd7e2ccb4f39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                );
            }
            case "Jumbotron": {
                return (
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                );
            }
            case "List": {
                return (
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                )
            }
            case "Pagination": {
                return (
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                );
            }
            case "Table": {
                return (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                )
            }
            case "Toast": {
                return (
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                )
            }
            default: {
                console.log("invalid or incomplete section!");
                break;
            }
        }

    }

    render() {
        // this clicked method here is used to height the selected page section
        const isClicked = this.props.clicked;
        // this surrounds the component in a highlight to indicate that it is currently 
        // being edited buy the user
        var classList = isClicked ? "page-section clicked" : "page-section";
        return (

            <div
                key={this.props.index}
                className={classList}
                style={{ border: this.state.border }}
                onClick={() => {
                    this.props.onClick(this.props.index, this.props.type);
                }}>
                {this.returnPageSection(this.props.type)}
            </div>
        );
    }

}


export default PageSection;