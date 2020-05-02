import React, { Component } from 'react';
import PageSection from './PageSection';

class EditingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            active: -1,
        }
    }

    handleActiveElement = (id) => {
        console.log(id)
        this.setState({ active: id });
    }

    returnPage() {
        try {
            let page = [];
            //for each entry in the JSON, add a page section to an array of page sections
            for (let index = 0; index < this.props.page.length; index++) {
                let jsonEntry = this.props.page[index];
                page.push(
                    <>
                        <PageSection
                            clicked={this.state.active === index}
                            onClick={this.handleActiveElement}
                            index={index}
                            type={jsonEntry.type}
                            key={index}
                            style={jsonEntry.style}
                            text={jsonEntry.text}
                            url={jsonEntry.url}
                            faClassName={jsonEntry.faClassName}
                            columns={jsonEntry.columns}
                            autoplay={jsonEntry.autoplay}
                            loop={jsonEntry.loop}
                        />
                    </>
                );
            }
            return page;
        }
        catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                {this.returnPage()}
            </>
        );
    }
}

export default EditingPage;