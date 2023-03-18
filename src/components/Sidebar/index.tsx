import React from 'react'
import './styles.scss'
const Sidebar: React.FC = () => {
  return (
    <div className='sidebar'>
        <ul className='sidebar__list'>
            <li>Home</li>
            <li>Services</li>
            <li>News</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Sidebar