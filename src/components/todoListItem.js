import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }
    
    render() {
        return (
            <tr>
                <td> { this.props.task } </td>
                <td> { this.props.isComplete ? 'Yes' : 'No' } </td>
                { this.renderActionItems() }
            </tr>
        );
    }
    
    renderActionItems() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button>Save</button> 
                    <button onClick = { this.onCancelClickHandler.bind(this) } >Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick = { this.onEditClickHandler.bind(this) }>Edit</button>
                <button>Delete</button>
            </td>
        );
    }
    
    onEditClickHandler() {
        this.setState({
            isEditing: true
        });
    }
    
    onCancelClickHandler() {
        this.setState({
            isEditing: false
        });
    }

}