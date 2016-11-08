import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }
    
    renderTaskItem() {
        const { task, isComplete } = this.props;
        
        const taskStyle = {
            color: isComplete ? 'green' : 'orange',
            cursor: 'pointer'
        }
        
        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={ this.onSaveHandler.bind(this) }>
                        <input className = "center-align" ref="updatedTask" type="text" defaultValue = { task } />
                    </form>
                </td>
            );
        }
        
        return (
            <td onClick = { this.props.toggleStatus.bind(this, task) } style = { taskStyle } > { task } </td>
        );
    }
    
    onSaveHandler(e) {
        e.preventDefault();

        const { task } = this.props;
        const oldTask = task;
        const newTask = this.refs.updatedTask.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({
            isEditing: false
        });
    };
    
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

    onDeleteClickHandler() {
        const { task, isComplete } = this.props;
        this.props.deleteTask(task);
        
    }

    renderActionItems() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button className="btn waves-effect waves-light" onClick = { this.onSaveHandler.bind(this) } >Save</button>
                    <button className="btn waves-effect waves-light margin-l-10" onClick = { this.onCancelClickHandler.bind(this) } > Cancel </button>
                </td>
            );
        }

        return (
            <td>
                <button className="btn waves-effect waves-light" onClick = { this.onEditClickHandler.bind(this) } >Edit</button>
                <button className="btn waves-effect waves-light margin-l-10" onClick = { this.onDeleteClickHandler.bind(this) } >Delete</button>
            </td>
        );
    }
    
    render() {
        return (
            <tr>
                { this.renderTaskItem() }
                <td> { this.props.isComplete ? 'Yes' : 'No' } </td>
                { this.renderActionItems() }
            </tr>
        );
    }
}