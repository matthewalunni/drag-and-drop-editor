import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Draggable from 'react-draggable';
import ToastDivider from './components/ToastDivider';
import ColorPickerButton from './components/ColorPickerButton';


class NavigationMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marginUnits: "px",
            linkMenuShowing: false,
            linkURL: "",
            linkLabel: "",
        }
        console.log(this.props)
    }

    toggleLinkMenu = () => {
        if (this.state.linkMenuShowing) {
            this.setState({ linkMenuShowing: false });
        } else {
            this.setState({ linkMenuShowing: true });
        }
    }

    addLink = (event) => {
        event.preventDefault();
        let jsonObj = {
            "text": this.state.linkLabel,
            "url": this.state.linkURL,
        }
        this.props.addToJsonArray(
            "links",
            jsonObj,
            this.props.selected,
        );
        this.setState({linkMenuShowing: false});
    }


    returnLinkMenu = () => {
        if (this.state.linkMenuShowing) {
            return (
                <Draggable>
                    <Toast
                        className="secondary-menu"
                        onClose={() => { this.setState({ linkMenuShowing: false }) }}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Link</strong>
                            <small>Add a Link</small>
                        </Toast.Header>
                        <Toast.Body>
                            <Form onSubmit={this.addLink}>
                                <Row className="center">
                                    <Col>
                                        <Form.Label>Label</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder={"Label"}
                                            onChange={(event) => { this.setState({ "linkLabel": event.target.value }) }} />
                                    </Col>
                                </Row>
                                <ToastDivider />
                                <Row className="center">
                                    <Col>
                                        <Form.Label>URL</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder={"URL"}
                                            onChange={(event) => { this.setState({ "linkURL": event.target.value }) }}
                                        />
                                    </Col>
                                </Row>
                                <ToastDivider />
                                <Row className="center">
                                    <Button
                                        className="w-90"
                                        variant="primary"
                                        type="submit">Add Link</Button>
                                </Row>
                            </Form>
                        </Toast.Body>
                    </Toast>
                </Draggable>);
        } else {
            return null;
        }
    }

    /**
     * This method sets the units for the margin as chosen by the user
     * @param {string} value 
     */
    setMarginUnits(value) {
        this.setState({ marginUnits: value });
    }

    /**
     * This method shows links for users to potentially remove
     */
    returnLinks() {
        let result = [];
        for (let index = 0; index < this.props.jsonEntry.links.length; index++) {
            const element = this.props.jsonEntry.links[index];
            result.push(
                <Row>
                    <Col className="center">
                        <Form.Label>{element.text}</Form.Label>
                    </Col>
                    <Col className="center">
                        <Form.Text>{element.url}</Form.Text>
                    </Col>
                    <Col className="center-right">
                        <Button
                            variant="secondary"
                            className="close-button"
                            onClick={() => this.props.editJsonArray("links", index, undefined, this.props.selected)}>×</Button>
                    </Col>
                </Row>
            );
        }
        return result;
    }

    render() {
        return (
            <>
                <Draggable>
                    <Toast
                        className="editor-menu"
                        onClose={this.props.onClose}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Navigation</strong>
                            <small>Edit Navigation</small>
                        </Toast.Header>
                        <Toast.Body>
                            <Form>
                                <Row className="center">
                                    <Col>
                                        <Form.Label>Navigation Brand</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder={this.props.jsonEntry.brand}
                                            onChange={(event) => { this.props.editJson("brand", event.target.value, this.props.selected) }} />
                                    </Col>
                                </Row>
                                <ToastDivider />
                                <Row className="center">
                                    <Form.Label>Edit Links</Form.Label>
                                </Row>
                                {this.returnLinks()}
                                <ToastDivider />
                                <Row className="center">
                                    <Button className="w-90"
                                        onClick={this.toggleLinkMenu}>Add Link</Button>
                                </Row>
                                <ToastDivider />
                                <Row>
                                    <Col className="center"><p className="w-100 center">Edit Text Color</p></Col>
                                    <Col className="center"><p className="w-100 center">Edit Background Color</p></Col>
                                </Row>
                                <Row>
                                    <Col className="center">
                                        <ColorPickerButton
                                            color={this.props.jsonEntry.style.color}
                                            className="w-95"
                                            componentEdited="style"
                                            selected={this.props.selected}
                                            editJsonArray={this.props.editJsonArray}
                                            secondaryField={"color"}>
                                            Edit Text Color
                                </ColorPickerButton>
                                    </Col>
                                    <Col className="center">
                                        <ColorPickerButton
                                            color={this.props.jsonEntry.style.backgroundColor}
                                            className="w-95"
                                            componentEdited="style"
                                            selected={this.props.selected}
                                            editJsonArray={this.props.editJsonArray}
                                            secondaryField={"backgroundColor"}>
                                            Edit Background Color
                                </ColorPickerButton>
                                    </Col>
                                </Row>
                                <ToastDivider />
                                <Row>
                                    <Col className="center" xs={6}>
                                        <Form.Label>Link Spacing</Form.Label>
                                    </Col>
                                    <Col className="center pr-0">
                                        <Form.Control type="number"
                                            onChange={
                                                (event) => {
                                                    this.props.editJsonArray(
                                                        "style",
                                                        "marginLeft",
                                                        event.target.value + this.state.marginUnits,
                                                        this.props.selected);
                                                    this.props.editJsonArray(
                                                        "style",
                                                        "marginRight",
                                                        event.target.value + this.state.marginUnits,
                                                        this.props.selected)
                                                }
                                            } />
                                    </Col>
                                    <Col className="center">
                                        <Form.Control
                                            as="select"
                                            onChange={(event) => this.setMarginUnits(event.target.value)}
                                        >
                                            <option>px</option>
                                            <option>pt</option>
                                            <option>mm</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <ToastDivider />
                                <Row>
                                    <Col className="center" xs={6}>
                                        <Form.Label>Font-Family</Form.Label>
                                    </Col>
                                    <Col className="center">
                                        <Form.Control as="select"
                                            onChange={(event) => this.props.editJsonArray("style", "fontFamily", event.target.value, this.props.selected)}>
                                            <option>Georgia, serif</option>
                                            <option>"Palatino Linotype", "Book Antiqua", Palatino, serif</option>
                                            <option>"Times New Roman", Times, serif</option>
                                            <option>Arial, Helvetica, sans-serif</option>
                                            <option>"Arial Black", Gadget, sans-serif</option>
                                            <option>"Comic Sans MS", cursive, sans-serif</option>
                                            <option>Impact, Charcoal, sans-serif</option>
                                            <option>"Lucida Sans Unicode", "Lucida Grande", sans-serif</option>
                                            <option>Tahoma, Geneva, sans-serif</option>
                                            <option>"Trebuchet MS", Helvetica, sans-serif</option>
                                            <option>Verdana, Geneva, sans-serif</option>
                                            <option>"Courier New", Courier, monospace</option>
                                            <option>"Lucida Console", Monaco, monospace</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <ToastDivider />
                                <Row className="center">
                                    <Button 
                                    className="w-90" 
                                    variant="danger"
                                    onClick={() => this.props.deleteSection(this.props.selected)}>Delete Component</Button>
                                </Row>
                            </Form>
                        </Toast.Body>
                    </Toast>
                </Draggable>
                {this.returnLinkMenu()}
            </>
        );
    }
}

export default NavigationMenu;