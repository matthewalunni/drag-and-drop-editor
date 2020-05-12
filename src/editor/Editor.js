import React, { Component } from 'react';
import EditorSideBar from './EditorSidebar';
import EditingPage from '../editor/EditingPage';
import NavigationMenu from './menus/NavigationMenu';
import HeadingMenu from './menus/HeadingMenu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            json: "",
        }
    }

    sideBarButton_OnClick = (name) => {
        backend.add(name);
        this.setState({ page: backend.pages });
    }

    pageSection_OnClick = (index, json) => {
        this.setState({
            activePageSection: index,
            json: json
        });
    }

    /**
     * This function reorders the page.
     * 
     * @param {int} startIndex      starting position of dragged item
     * @param {int} endIndex        ending position of dragged item
     */
    reorder = (startIndex, endIndex) => {
        let list = backend.all()
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        backend.setPage(result);
        this.setState({ page: backend.all() })
        return result;
    };


    editJson = (field, value, selected) => {
        backend.editJson(field, value, selected);
        this.setState({ page: backend.all() })
    }

    editJsonArray = (field, secondaryField, value, selected) => {
        backend.editJsonArray(field, secondaryField, value, selected);
        this.setState({ page: backend.all() })
    }

    addToJsonArray = (field, secondaryField, value, selected) => {
        backend.addToJsonArray(field, secondaryField, value, selected);
        this.setState({ page: backend.all() })
    }

    deleteSection = (selected) => {
        backend.deleteSection(selected);
        this.setState({
            page: backend.all(),
            activePageSection: -1,
            json: "",
        })
    }

    /**
     * This function returns the corresponding page section editor menu on page section click
     */
    returnMenu() {
        switch (this.state.json.type) {
            case "Navigation": {
                return (
                    <NavigationMenu
                        onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}
                        jsonEntry={this.state.json}
                        editJson={this.editJson}
                        editJsonArray={this.editJsonArray}
                        addToJsonArray={this.addToJsonArray}
                        selected={this.state.activePageSection}
                        deleteSection={this.deleteSection}
                    />
                )
            }
            case "Heading": {
                return (
                    <HeadingMenu
                        onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}
                        jsonEntry={this.state.json}
                        editJson={this.editJson}
                        editJsonArray={this.editJsonArray}
                        addToJsonArray={this.addToJsonArray}
                        selected={this.state.activePageSection}
                        deleteSection={this.deleteSection}
                    />
                );
            }
            case "Image": {
                return (
                    <Draggable>
                        <Toast
                            className="editor-menu"
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                            onClose={() => { this.setState({ json: "", activePageSection: -1 }) }}>
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
                return "";
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