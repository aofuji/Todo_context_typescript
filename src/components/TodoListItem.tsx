import React from 'react'

const TodoListItem = ( {todo}: any ) => {
    return (
        <div>
            {todo.id} - {todo.title} - {todo.done? "true" : "false"}
        </div>

    )
}

export default TodoListItem