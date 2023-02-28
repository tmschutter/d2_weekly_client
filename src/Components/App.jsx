import { useState, useEffect } from 'react'
import Checklist from './Checklist'
import D2_logo from '../assets/D2_logo.png'

const App = () => {

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