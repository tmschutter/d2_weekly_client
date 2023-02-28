import { useState } from "react"

const TaskForm = ({ refresher }) => {
   
   const [ text, setText ] = useState('')

   const handleSubmit = async (e) => {
      e.preventDefault();
      let response = await fetch('https://d2-weekly-server.onrender.com/add', {
         method: 'PUT',
         mode: 'cors',
         headers: {
            "Content-Type": "application/json"
          },
         body: JSON.stringify({text})
      })
      let data = await response.json()
      console.log(data)
      setText('')
      refresher.setRefresh(refresher.refresh + 1)
   }
   
   return (
      <form className="task-form" onSubmit={handleSubmit}>
         <input type='text' 
            className="text-input"
            value={text} 
            onChange={(e)=>{setText(e.target.value)}}
            placeholder='Task name'>
            </input>
         <input className="submit" type='submit' value='ADD TASK'></input>
      </form>
   )
}

export default TaskForm;