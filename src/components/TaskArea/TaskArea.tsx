import './style.css'
import Clipboard from '../../assets/Clipboard.png'
import { ChangeEvent, useState } from 'react'
import { Task } from '../Task/Task'
import { PlusCircle } from '@phosphor-icons/react'

export const TaskArea = () => {

  // onChange newtask stock
  const [newTaskText, setNewTaskText] = useState('')
  // all tasks
  const [tasks, setTasks] = useState([
    'Beber água', 'Ir para a academia', 'Fazer uma lista de compras'
  ])
  // useState to view how much task are completed
  const [completedTasks, setCompletedTasks] = useState(0);

  // function to observe input
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event?.target.value)
  }
  // function to create a new task after pressing the 'enter' key on the keyboard
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleCreateNewTask()
    }
  }
  // button to create a new task
  function handleCreateNewTask() {
    if (newTaskText.length > 0) {
      setTasks([...tasks, newTaskText])
      setNewTaskText('')
    }
  }
  // function to delete a task
  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = tasks.filter(task => {
      return task !== commentToDelete
    })
    setTasks(commentsWithoutDeleteOne)
  }
  //function to complete task
  function countCheckTask(isChecked: boolean) {
    if (isChecked) {
      setCompletedTasks(prevCompletedTasks => prevCompletedTasks + 1)
    } else setCompletedTasks(prevCompletedTasks => prevCompletedTasks - 1)
  }
  // function to decrease the counter after delete a task completed
  function decreaseValueCompleted(isChecked: boolean) {
    if (!isChecked) {
      setCompletedTasks(completedTasks - 1)
    }
  }
  // button disabled
  const isNewTaskEmpty = newTaskText.length === 0;
  return (
    <main className='taskArea'>

      {/* newtask */}

      <section className='NewTask'>

        <input
          onChange={handleNewTaskChange}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          required
        />
        <button
          disabled={isNewTaskEmpty}
          onClick={handleCreateNewTask}
        >
          Criar
          <PlusCircle size={24} />
        </button>
      </section>

      {/* task created and done */}
      <section className='info'>
        <div className='taskCreated'>
          <strong>Tarefas criadas <span>{tasks.length}</span></strong>
        </div>


        <div className='taskCompleted'>
          <strong>Concluídas <span>{completedTasks}</span></strong>
        </div>
      </section>
      {/* task */}
      <section className='taskRegistered'>
        {tasks.map(task => {
          return (
            <Task
              key={task}
              content={task}
              onDeleteComment={deleteComment}
              onCheckTask={countCheckTask}
              onDecreaseValueCompleted={decreaseValueCompleted}
            />
          )
        })}

        <div className={tasks.length === 0 ? 'globalCenter globalCenterActive' : 'globalCenter globalCenterDesativated'}>
          <img src={Clipboard} alt="clipboard image" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </section>
    </main>

  )
}