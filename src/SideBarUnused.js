import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';



function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {
    return (
        <>
            <ListItem button dense {...rest}>
                <ListItemText style={{ paddingLeft: depth * depthStep }}>
                    <span className="sidebar-subitem-text">{label}</span>
                </ListItemText>
            </ListItem>
            {Array.isArray(items) ? (
                <List disablePadding dense>
                    {items.map((subItem) => (
                        <SidebarItem
                            key={subItem.name}
                            depth={depth + 1}
                            depthStep={depthStep}
                            {...subItem}
                        />
                    ))}
                </List>
            ) : null}
        </>
    )
}

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            depth: this.props.depth,
            depthStep: this.props.depthStep,

        }
    }

    render() {
        return (
            <div className="sidebar">
                <Draggable>
                    <List disablePadding dense>
                        {this.props.items.map((sidebarItem, index) => (
                            <SidebarItem
                                key={`${sidebarItem.name}${index}`}
                                depthStep={this.depthStep}
                                depth={this.depth}
                                {...sidebarItem}
                            />
                        ))}
                    </List>
                </Draggable>

            </div>
        )
    }
}

export default Sidebar;