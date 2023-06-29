import { useState } from 'react'
import Todo from './components/todo'
import { TodoForm } from './components/TodoForm';
import Search from './components/Search';

import './App.css';




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

  const [search , setSearch] = useState ("")

  const addTodo =(text, category) => {
       const newTodos = [...todo, 
        {
      id: Math.floor(Math.random () * 10000),
      text,
      category,
      isCompleted: false
    },
  ]
  setTodos(newTodos)
}
  const removeTodo = (id) => {
    const newTodos = [...todo]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

const completeTodo = (id) => {
  const newTodos = [...todo]
  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
  setTodos(newTodos)
}

  return( <div className='app'>
    <h1>Lista de tarefas</h1>
     <Search Search={search} setSearch={setSearch}/>
     <filter />

    <div className="todo-list">
      {todo
      .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
      .map((todo) => (
      <Todo key={todo.id} todo={todo} removeTodo={removeTodo} CompleteTodo = {completeTodo} />
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
