import React, { Component } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
import Button from 'react-bootstrap/Button';

class ColorPickerButton extends Component {
    state = {
        displayColorPicker: false,
        color: this.props.color,
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        //console.log(this.props)
        this.setState({ color: color.hex })
        this.props.editJsonArray(this.props.componentEdited, this.props.secondaryField, color.hex, this.props.selected)
    };

    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: '100%',
                    height: '14px',
                    borderRadius: '2px',
                    background: this.state.color,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                    width: "100%",
                },
                popover: {
                    position: 'inherit',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        if (this.state.displayColorPicker) {
            return (
                <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose} />
                    <SketchPicker color={this.state.color} onChange={this.handleChange} />
                    <Button className='w-100'>Close</Button>
                </div>
            );
        }
        else {
            return (
                <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.color} />
                </div>
            );
        }
    }
}

export default ColorPickerButton