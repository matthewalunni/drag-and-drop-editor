import React, { Component } from 'react';
import EditorSideBar from './EditorSidebar';
import EditingPage from '../editor/EditingPage';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import EditorBackend from './EditorBackend';

var backend = new EditorBackend();

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: backend.all(),
            activePageSection: -1,
        }
    }

    sideBarButton_OnClick = (name) => {
        backend.add(name);
        this.setState({page: backend.pages});
    }

    pageSection_OnClick = (index) => {
        console.log(this.state, index)
        this.setState({activePageSection: index});
        console.log(this.state, index)
    }


    render() {
        return (
            <Container className="page-container">
                <Row>
                    <Col className="sidebar-container">
                        <EditorSideBar sideBarButton_OnClick={this.sideBarButton_OnClick} page={this.props.page} />
                    </Col>
                    <Col className="editing-page">
                        <EditingPage pageSection_OnClick={this.pageSection_OnClick} active={this.state.activePageSection} page={this.state.page} />
                    </Col>
                </Row>
            </Container>



        );
    }
}

export default Editor;