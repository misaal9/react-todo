import React from 'react';

export default class ToDoHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Completed Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            
        );
    }
}