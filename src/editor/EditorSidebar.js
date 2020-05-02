import React, { Component } from 'react';
import './sidebar.css';
import './editor.css';
import Button from 'react-bootstrap/Button';


class EditorSideBar extends Component {
    render() {
        return (
            <>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Navigation") }}
                    className="sidebar-button">
                    Navigation
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Heading") }}
                    className="sidebar-button">
                    Heading
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Image") }}
                    className="sidebar-button">
                    Image
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Button") }}
                    className="sidebar-button">
                    Button
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Divider") }}
                    className="sidebar-button">
                    Divider
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Spacer") }}
                    className="sidebar-button">
                    Spacer
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Row") }}
                    className="sidebar-button">
                    Row
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Icon") }}
                    className="sidebar-button">
                    Icon
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Video") }}
                    className="sidebar-button">
                    Video
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("BreadCrumb") }}
                    className="sidebar-button">
                    BreadCrumb
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("ButtonGroup") }}
                    className="sidebar-button">
                    ButtonGroup
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Card") }}
                    className="sidebar-button">
                    Card
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Carousel") }}
                    className="sidebar-button">
                    Carousel
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Jumbotron") }}
                    className="sidebar-button">
                    Jumbotron
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("List") }}
                    className="sidebar-button">
                    List
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Pagination") }}
                    className="sidebar-button">
                    Pagination
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Popover") }}
                    className="sidebar-button">
                    Popover
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Table") }}
                    className="sidebar-button">
                    Table
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Tabs") }}
                    className="sidebar-button">
                    Tabs
                    </Button>
                <Button
                    onClick={() => { this.props.sideBarButton_OnClick("Toast") }}
                    className="sidebar-button">
                    Toast
                    </Button>
            </>
        );
    };
}


const sideBarContainerStyle = {
    // marginLeft: (constants.SideBarWidthAsInt) + "vh",
    // marginRight: (constants.SideBarWidthAsInt) + "vh",
    // marginTop: "2vh",
    // margin: "auto",
    // width: constants.EditorSideBarWidth,
    // height: "100vh",
    // background: "grey",
    // border: "3px solid green",
    // float: "left",
    // position: "fixed",
};


export default EditorSideBar