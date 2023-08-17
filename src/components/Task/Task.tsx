import './style.css'
import check from '../../assets/check.svg'
import { Trash } from "@phosphor-icons/react";
import { useState } from 'react'

interface taskProps {
  content: string;
  onDeleteComment: (content: string) => void;
  onCheckTask: (checked: boolean) => void;
  onDecreaseValueCompleted: (checked: boolean) => void;
}

export const Task = ({ content, onDeleteComment, onCheckTask, onDecreaseValueCompleted }: taskProps) => {

  const [checked, setChecked] = useState(true)
  // function to change task status
  function handleCheck() {
    setChecked(!checked)
    onCheckTask(checked)
  }

  // function to delete comment
  function handleDeleteComment() {
    onDeleteComment(content)
    onDecreaseValueCompleted(checked)
  }

  return (
    <main className={checked ? 'taskNotChecked task' : 'taskChecked task'}>
      <button className='checkBtn' onClick={handleCheck}>
        <img src={check} alt="check icon" />
      </button>
      <p>{content}</p>
      <button onClick={handleDeleteComment} className='deleteTask'>
        <Trash size={18} />
      </button>
    </main>
  )
}