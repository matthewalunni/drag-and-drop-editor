import React, { Component } from 'react';
import PageSection from './PageSection';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


class EditingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.page,
            renderedPage: this.returnPage(),
            active: -1,
        }
    }

    handleActiveElement = (id, type) => {
        this.setState({ active: id });
        this.props.pageSection_OnClick(id, type);
    }



    onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        
        this.props.reorder(
            result.source.index,
            result.destination.index
        );
    }

    getItemStyle = (isDragging, draggableStyle) => ({
        // change background colour if dragging
        background: isDragging ? "lightgreen" : "grey",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
    });


    returnPage() {
        try {
            let page = [];
            //for each entry in the JSON, add a page section to an array of page sections
            for (let index = 0; index < this.props.page.length; index++) {
                let jsonEntry = this.props.page[index];
                page.push(
                    <Draggable key={index} draggableId={index.toString()} index={index}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={this.getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                )}
                            >
                                {<PageSection
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
                                />}
                            </div>
                        )}
                    </Draggable>
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
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {
                            (provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={this.getListStyle(snapshot.isDraggingOver)}
                                >
                                    {this.returnPage()}
                                </div>)
                        }
                    </Droppable>
                </DragDropContext>
            </>
        );
    }
}

export default EditingPage;