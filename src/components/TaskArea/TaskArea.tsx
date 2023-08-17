import './style.css'
import Clipboard from '../../assets/Clipboard.png'
import { Task } from '../Task/Task'
import { ChangeEvent, useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'

export const TaskArea = () => {

  // onChange newtask stock
  const [newTaskText, setNewTaskText] = useState('')
  // all tasks
  const [tasks, setTasks] = useState([
    'Beber água', 'Ir para a academia', 'Fazer uma lista de compras'
  ])


  // function to observe input
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event?.target.value)
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

  // useState to view how much task are completed
  const [completedTasks, setCompletedTasks] = useState(0);

  //function to complete task
  function countCheckTask(isChecked: boolean) {
    if (isChecked) {
      setCompletedTasks(prevCompletedTasks => prevCompletedTasks + 1)
    } else setCompletedTasks(prevCompletedTasks => prevCompletedTasks - 1)
  }
  function decreaseValueCompleted(isChecked: boolean) {
    if (!isChecked) {

      setCompletedTasks(completedTasks - 1)
    }
  }


  const isNewTaskEmpty = newTaskText.length === 0;
  return (
    <main className='taskArea'>


      {/* newtask */}

      <section className='NewTask'>

        <input
          onChange={handleNewTaskChange}
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