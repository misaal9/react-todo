import React from 'react';
import ToDoTable from './todoTable';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h2 className="center-align">What To Do</h2>
                <ToDoTable />
            </div>
        );
    }
}