import { useState, useEffect } from "react"
import ListItem from "./ListItem"
import TaskForm from "./TaskForm"

const Checklist = () => {
   const [ checklist, setChecklist ] = useState([])
   const [ refresh, setRefresh ] = useState(0)
   const [ deleteMode, setDeleteMode ] = useState(false)

   useEffect(()=> {
      async function fetchDefault(){
         const response = await fetch('https://d2-weekly-server.onrender.com/all', {mode: 'cors'})
         const data = await response.json()
         setChecklist(data)
       }
       fetchDefault()
   }, [refresh])

   return (
      <div className="content-container">
         <div className="header">
            <button
                  onClick={ () => {setDeleteMode(!deleteMode)} }
                  className={`del-toggle delete ${deleteMode ? 'bg-red' : 'bg-dark-red'}`}>
                     <i className="bi bi-trash-fill"></i>
                  </button>

            <TaskForm refresher={{refresh, setRefresh}}/>
         </div>

         <div className="ListItemsContainer">
            {checklist.map( item => 
               <ListItem
                  key={item.id} 
                  item={item} 
                  deleteMode={deleteMode} 
                  refresher={{refresh, setRefresh}}/>
            )}
         </div>
      </div>
   )
}

export default Checklist