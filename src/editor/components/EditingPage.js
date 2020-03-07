import React, { Component } from 'react';
import * as constants from '../constants';

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
                //TODO - some logic here
                //page.push(some component)
                console.log(this.props.page[index]);
            }

            return page;
        } catch (error) {

        }
    }

    render() {
        return (
            <div style={containerStyle}>
                {this.returnPage()}
            </div>
        );
    }
}

const containerStyle = {
    background: "white",
    width: (100 - constants.EditorSideBarWidth) + "%",
    height: "100vh",
    border: "3px solid red",
    marginLeft: constants.EditorSideBarWidth,
}

export default EditingPage;