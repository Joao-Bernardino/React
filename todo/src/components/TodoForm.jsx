import {useState} from 'react'

export const TodoForm = () => {
  const[value, setValue] = useState("");
  const [category, SetCategory] = useState("");

  const hadleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviou form!!")
  }
  return (
    <div>
      <h2>Criar tarefa:</h2>
      <form onSubmit={hadleSubmit}>
        <input type="text" placeholder='Digite o título'/>
        <select >
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
