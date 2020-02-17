import React, { Component } from 'react';
import PageEditor from './PageEditor';
import PageItem from './PageItem';

class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'isEditing': false,

        }

        this.handlePageEdit = this.handlePageEdit.bind(this);
        this.handlePageDelete = this.handlePageDelete.bind(this);
        this.handleOnPageCancel = this.handleOnPageCancel.bind(this);
    }



    handlePageEdit() {
        this.setState({
            'isEditing': true,
        });
        console.log("time to edit a page");
    }

    handlePageDelete(id) {
        console.log("time to delete a page " + this.props.id);
        this.props.onPageDelete(this.props.id)
    }

    handleOnPageCancel() {
        this.setState({
            'isEditing': false,
        });
        console.log("time to cancel a page ");
    }

    render() {
        if (this.state.isEditing) {
            return (
                <PageEditor
                    {...this.props}
                    onPageCancel={this.handleOnPageCancel}
                />
            );
        }
        else {

            return (
                <PageItem

                    {...this.props}
                    isEditing={this.props.isEditing}
                    onPageEdit={this.handlePageEdit}
                    onPageDelete={this.handlePageDelete}

                />
            );
        }
    }
}

export default Page;