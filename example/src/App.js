import React from 'react'
import TestComponent01 from './test/test-01'
import TestComponent02 from './test/test-02'
import TestComponent03 from './test/test-03'
import './style.css'

const App = () => {
  return(
    <div className="containerFlex">
      <TestComponent01/>
      <TestComponent02/>
      <TestComponent03/>
    </div>
  )
}

export default App
