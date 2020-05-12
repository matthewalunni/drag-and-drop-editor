import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Draggable from 'react-draggable';
import ToastDivider from './components/ToastDivider';
import ColorPickerButton from './components/ColorPickerButton';


class HeadingMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paddingUnits: "px",
        }
    }

    /**
     * This method sets the units for the margin as chosen by the user
     * @param {string} value 
     */
    setPaddingUnits(value) {
        this.setState({ paddingUnits: value });
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
                            <strong className="mr-auto">Heading</strong>
                            <small>Edit Heading</small>
                        </Toast.Header>
                        <Toast.Body>
                            <Form>
                                <Row className="center">
                                    <Col>
                                        <Form.Label>Heading Text</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder={this.props.jsonEntry.brand}
                                            onChange={(event) => { this.props.editJson("text", event.target.value, this.props.selected) }} />
                                    </Col>
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
                                        <Form.Label>Padding</Form.Label>
                                    </Col>
                                    <Col className="center pr-0">
                                        <Form.Control type="number"
                                            onChange={
                                                (event) => {
                                                    this.props.editJsonArray(
                                                        "style",
                                                        "paddingTop",
                                                        event.target.value + this.state.paddingUnits,
                                                        this.props.selected);
                                                    this.props.editJsonArray(
                                                        "style",
                                                        "paddingBottom",
                                                        event.target.value + this.state.paddingUnits,
                                                        this.props.selected)
                                                }
                                            } />
                                    </Col>
                                    <Col className="center">
                                        <Form.Control
                                            as="select"
                                            onChange={(event) => this.setPaddingUnits(event.target.value)}
                                        >
                                            <option>px</option>
                                            <option>pt</option>
                                            <option>%</option>
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
                                <Row>
                                    <Col>
                                        <Button
                                            className="alignment-button"
                                            onClick={(event) => {
                                                this.props.editJsonArray(
                                                    "style",
                                                    "textAlign",
                                                    "left",
                                                    this.props.selected);
                                            }}>
                                            <i className="fa fa-align-left" />
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            className="alignment-button"
                                            onClick={(event) => {
                                                this.props.editJsonArray(
                                                    "style",
                                                    "textAlign",
                                                    "center",
                                                    this.props.selected);
                                            }}>
                                            <i className="fa fa-align-center" />
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            onClick={(event) => {
                                                this.props.editJsonArray(
                                                    "style",
                                                    "textAlign",
                                                    "right",
                                                    this.props.selected);
                                            }}
                                            className="alignment-button">
                                            <i className="fa fa-align-right" />
                                        </Button>
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
            </>
        );
    }
}

export default HeadingMenu;