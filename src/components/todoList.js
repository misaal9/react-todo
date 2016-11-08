import React from 'react';
import _ from 'lodash';
import TodoListItem from './todoListItem';

export default class ToDoList extends React.Component {
    renderItems() {
        return _.map(this.props.todos, (todo, index) => <TodoListItem key = { index } {...todo} />)
    };

    render() {
        return (
            <tbody>
                { this.renderItems() }
            </tbody>
        );
    }
}