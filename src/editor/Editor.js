import React, { Component } from 'react';
import EditorSideBar from './EditorSidebar';
import EditingPage from '../editor/EditingPage';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import EditorBackend from './EditorBackend';
import Toast from 'react-bootstrap/Toast';
import Draggable from 'react-draggable';

var backend = new EditorBackend();

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: backend.all(),
            activePageSection: -1,
            menu: undefined,
        }
    }

    sideBarButton_OnClick = (name) => {
        backend.add(name);
        this.setState({ page: backend.pages });
    }

    pageSection_OnClick = (index, type) => {
        console.log(this.state, index, type)
        this.setState({
            activePageSection: index,
            menu: type
        });
        console.log(this.state, index)
    }


    /**
     * This function reorders the page.
     * 
     * @param {int} startIndex      starting position of dragged item
     * @param {int} endIndex        ending position of dragged item
     */
    reorder = (startIndex, endIndex) => {
        let list = backend.all()
        console.log(list, startIndex, endIndex);
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        backend.setPage(result);
        this.setState({ page: backend.all() })
        return result;
    };


    /**
     * This function returns the corresponding page section editor menu on page section click
     */
    returnMenu() {
        switch (this.state.menu) {
            case "Navigation": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Navigation</strong>
                                <small>Edit Navigation</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            <Form>
                                    <Row>
                                        <Col>
                                            <Form.Label>Text Input</Form.Label>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter email" />
                                        </Col>
                                    </Row>
                                </Form>
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                )
            }
            case "Heading": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Heading</strong>
                                <small>Edit Heading</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Image": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Image</strong>
                                <small>Edit Image</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Button": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Button</strong>
                                <small>Edit Button</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Divider": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Divider</strong>
                                <small>Edit Divider</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Spacer": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Spacer</strong>
                                <small>Edit Spacer</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Row": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Row</strong>
                                <small>Edit Row</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Icon": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Icon</strong>
                                <small>Edit Icon</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Video": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Video</strong>
                                <small>Edit Video</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "ButtonGroup": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">ButtonGroup</strong>
                                <small>Edit ButtonGroup</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Card": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Card`</strong>
                                <small>Edit Card`</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Carousel": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Carousel</strong>
                                <small>Edit Carousel</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Jumbotron": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Jumbotron</strong>
                                <small>Edit Jumbotron</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "List": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">List</strong>
                                <small>Edit List</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Pagination": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Pagination</strong>
                                <small>Edit Pagination</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Table": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Table</strong>
                                <small>Edit Table</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            case "Toast": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ menu: undefined, activePageSection: -1 }) }}>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                <strong className="mr-auto">Toast</strong>
                                <small>Edit Toast</small>
                            </Toast.Header>
                            <Toast.Body>
                                Hello, world! This is a toast message.
                            </Toast.Body>
                        </Toast>
                    </Draggable>
                );
            }
            default: {
                return undefined;
            }
        }
    }


    render() {
        return (
            <Container className="page-container">
                <Row>
                    <Col className="sidebar-container">
                        <EditorSideBar sideBarButton_OnClick={this.sideBarButton_OnClick} page={this.props.page} />
                    </Col>
                    <Col className="editing-page">
                        <EditingPage
                            pageSection_OnClick={this.pageSection_OnClick}
                            active={this.state.activePageSection}
                            page={this.state.page}
                            reorder={this.reorder}
                        />
                    </Col>
                    {this.returnMenu()}
                </Row>
            </Container>



        );
    }
}

export default Editor;