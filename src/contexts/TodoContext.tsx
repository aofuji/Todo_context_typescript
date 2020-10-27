import React, {useState,createContext, ReactNode} from 'react'

interface IProps {
    children: ReactNode;
    // any other props that come into the component
}

type Todo = {
    id: number;
    title: string;
    done: boolean;
}

type ITodoContext = [Todo[], any];

export const TodoContext = createContext<ITodoContext>([[], () => null]);

const TodoProvider = ({ children }: IProps) => {
    
    const [todos, setTodos] = useState([
        { id: 1, title: 'Ir Correr', done: false },
        { id: 2, title: 'Ir para academia', done: false },
        { id: 3, title: 'Ir jogar Futebol', done: false }
      ])


      function saveTodo(todo: { id: number,title: string, done: boolean; }) {
        const newTodo = {
            id: todos.length + 1,
            title: todo.title,
            done: false
        };
        setTodos([...todos, newTodo]);
    }
      
      return(
          <TodoContext.Provider value={[todos, saveTodo ]}  >
              {children}
          </TodoContext.Provider>
      )

}

export default TodoProvider

