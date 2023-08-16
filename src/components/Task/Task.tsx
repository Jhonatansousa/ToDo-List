import './style.css'
import check from '../../assets/check.svg'
import { Trash } from "@phosphor-icons/react";
import { useState } from 'react'

interface taskProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export const Task = ({ content, onDeleteComment }: taskProps) => {

  const [checked, setChecked] = useState(true)

  function handleCheck() {
    setChecked(!checked)
  }

  // function to delete comment
  function handleDeleteComment() {
    onDeleteComment(content)
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