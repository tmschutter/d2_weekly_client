import { useState } from "react";

const ListItem = ({ item, deleteMode, refresher }) => {

   const [ checked, setChecked ] = useState(item.complete);

   const handleChange = async (bool, id) => {
      const response = await fetch(`https://d2-weekly-server.onrender.com/task/${id}`, {
         method: 'PATCH',
         mode: 'cors',
         headers: {
            "Content-Type": "application/json"
          },
         body: JSON.stringify({bool})
      });
      const data = await response.json();
      console.log(data);
      setChecked(bool)
   }

   const xHandler = async () => {
      const response = await fetch(`https://d2-weekly-server.onrender.com/task/${item.id}`, {
         method: 'DELETE',
         mode: 'cors',
      });
      const data = await response.json();
      console.log(data);
      
      refresher.setRefresh(refresher.refresh + 1)
   }

   return (
      <div className="ListItem">
         <button className="delete bg-red" type="button"
            style={{visibility: deleteMode ? 'visible' : 'hidden'}}
            disabled={!deleteMode}
            onClick={xHandler}>
               <i className="bi bi-trash-fill"></i>
            </button>
         <label>
            <input type="checkbox" 
               checked={checked}
               onChange={()=>{handleChange(!checked, item.id)}}>
               </input>
            {item.task_name}
         </label>
      </div>
   )
}

export default ListItem;