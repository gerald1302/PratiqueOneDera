import React from 'react'
import Navbar from './components/Navrbar/Navbar'
import Home from './components/Home/Home'
import Gird from './components/Gird/Gird'
import Search from './components/Search/Search'
import Fin from './components/Fin/Fin'
import Accomodation from './components/Accomodation/Accomodation'
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Gird/>
    <Search/>
    <Accomodation/>
    <Fin/>
    </>
  )
}

export default App