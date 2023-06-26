import { useState } from 'react'

import Todo from './components/todo'

import './App.css';
import { TodoForm } from './components/TodoForm';


function App() {
const[todo, setTodos] = useState([
  {id:1,
  text: "Criar funcionalidade X no sistema",
  category: "trabalho",
  isCompleted: false,
  },

  {
  id:2,
  text: "Ir para a academia", 
  category: "Pessoal", 
  isCompleted: false,
  
  },

  {
  id:3,
  text: "Estudar react",
  category: "Estudos",
  isCompleted: false,
  }])
  return( <div className='app'>
    <h1>Lista de tarefas</h1>
    <div className="todo-list">
      {todo.map((todo) => (
      <Todo todo={todo}/>
      ))}
    </div>
    <TodoForm/>
    </div>
  )
}

export default App
