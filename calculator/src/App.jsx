import './App.css'

import Wrapper from './Component/Wrapper'
import {CalProvider } from './Context/CalContext'


function App() {

  return (
    <>
      <CalProvider>
        <Wrapper/>
      </CalProvider>
      
    </>
  )
}

export default App
