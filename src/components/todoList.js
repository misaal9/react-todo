import React from 'react';
import _ from 'lodash';
import TodoListItem from './todoListItem';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    renderItems() {
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <TodoListItem deleteTask = { this.props.deleteTask.bind(this) } toggleStatus = { this.props.toggleStatus.bind(this) } key = { index } {...todo} {...props}/>)
    };

    render() {
        return (
            <tbody>
                { this.renderItems() }
            </tbody>
        );
    }
}