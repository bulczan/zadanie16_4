import React from 'react';

const TodoList = props => props.data.map(value =>
    <li onClick = {() => props.handleClick(value.id)} key={value.id}>{value.text}</li>
);

export default TodoList;


