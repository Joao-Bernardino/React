import {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const[value, setValue] = useState("");
  const [category, SetCategory] = useState("");

  const hadleSubmit = (e) => {
    e.preventDefault()
    if(!value || !category) return;
      // adicionar todo
      addTodo(value, category)
      // limpar os campos
      setValue("")
      SetCategory("")
  }
  console.log (value)
  return (
    <div className='todo-form'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={hadleSubmit}>
        <input
         type="text" 
         placeholder='Digite o título' 
         onChange={(e) => setValue(e.target.value) }/>
        <select value = {category} onChange={(e) => SetCategory(e.target.value) } >
          <option value="">Selecione uma Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>

    </div>
  )
}
