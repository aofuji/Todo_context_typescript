import React, { ChangeEvent, useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const AddTodo = () => {

    const context= useContext(TodoContext);

    const  saveTodo = context[1];

    const [todo, SetTodo] = useState({title: ''});


    const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(saveTodo)

         saveTodo(todo)
    }

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        SetTodo({
            ...todo,
            title: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange} />
            <button>Adicionar</button>
        </form>
    )
}

export default AddTodo