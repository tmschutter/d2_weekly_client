import { useState, useEffect } from 'react'
import Checklist from './Checklist'
import D2_logo from '../assets/D2_logo.png'

const App = () => {
   const [ checklist, setChecklist ] = useState([])
   const [ refresh, setRefresh ] = useState(0)
   const [ deleteMode, setDeleteMode ] = useState(false)

   useEffect(()=> {
      async function fetchDefault(){
         const response = await fetch('http://localhost:8000/all', {mode: 'cors'})
         const data = await response.json()
         setChecklist(data)
       }
       fetchDefault()
   }, [refresh])

   return (
      <div className='main'>
         <div className='logo-div'>
            WEEKLY
         </div>
         <img className='main-logo' src={D2_logo}/>
         <Checklist />
      </div>
   )
}

export default App