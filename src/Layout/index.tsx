import React from 'react'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import './styles.scss'
const Layout = () => {
  return (
    <div className='layout'>
      <div className="layout__sidebar">
        <Sidebar />
      </div>
      <div className='layout__main'>
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default Layout