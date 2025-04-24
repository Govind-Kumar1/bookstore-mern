import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CreateBooks from './Pages/CreateBooks'
import ShowBook from './Pages/ShowBook'
import EditBook from './Pages/EditBook'
import DeleteBook from './Pages/DeleteBook'
const App = () => {
  return (
     <Routes> 
      <Route path='/' element ={<Home/>} />
      <Route path='/books/add' element ={<CreateBooks/>} />
      <Route path='/books/details/:id' element ={<ShowBook/>} />
      <Route path='/books/edit/:id' element ={<EditBook/>} />
      <Route path='/books/delete/:id' element ={<DeleteBook/>} />
     </Routes>
  )
}

export default App