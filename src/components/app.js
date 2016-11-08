import React from 'react';
import ToDoTable from './todoTable';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="center-align">Simple ToDo App</h1>
                <ToDoTable />
            </div>
        );
    }
}