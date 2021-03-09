import React from 'react'

const Todo = (props) => {
    return (
        <li>{props.title}
            <button className='listButton' onClick={() => {props.remove(props.index)}}>Remove Item</button>
        </li>
    )
}

export default Todo

