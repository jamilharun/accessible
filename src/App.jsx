import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from './components/nav';


function App() {
  
  return (
    <>
      <Router>
          <Routes>
              <Route index path="/*" element={<Nav/>}/>
            </Routes>
        </Router>
    </>  
  )
}

export default App
