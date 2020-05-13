import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Draggable from 'react-draggable';
import ToastDivider from './components/ToastDivider';
import ColorPickerButton from './components/ColorPickerButton';


class ImageMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paddingUnits: "px",
            borderRadiusUnits: "px",
        }
    }

    /**
     * This method sets the units for the margin as chosen by the user
     * @param {string} value 
     */
    setPaddingUnits(value) {
        this.setState({ paddingUnits: value });
    }

    setBorderRadiusUnits(value) {
        this.setState({borderRadiusUnits: value});
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
                            <strong className="mr-auto">Image</strong>
                            <small>Edit Image</small>
                        </Toast.Header>
                        <Toast.Body>
                            <Form>
                                <Row className="center">
                                    <Col>
                                        <Form.Label>Image URL</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder={this.props.jsonEntry.url}
                                            onChange={(event) => { this.props.editJson("url", event.target.value, this.props.selected) }} />
                                    </Col>
                                </Row>
                                <ToastDivider />
                                <Row>
                                    <Col className="center"><p className="w-100 center">Edit Background Color</p></Col>
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
                                        <Form.Label>Border Radius</Form.Label>
                                    </Col>
                                    <Col className="center pr-0">
                                        <Form.Control type="number"
                                            onChange={
                                                (event) => {
                                                    this.props.editJsonArray(
                                                        "style",
                                                        "borderRadius",
                                                        event.target.value + this.state.borderRadiusUnits,
                                                        this.props.selected);
                                                }
                                            } />
                                    </Col>
                                    <Col className="center">
                                        <Form.Control
                                            as="select"
                                            onChange={(event) => this.setBorderRadiusUnits(event.target.value)}
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
                                    <Col>
                                        <Button
                                            className="alignment-button"
                                            onClick={(event) => {
                                                this.props.editJsonArray(
                                                    "style",
                                                    "justifyContent",
                                                    "flex-start",
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
                                                    "justifyContent",
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
                                                    "justifyContent",
                                                    "flex-end",
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

export default ImageMenu;