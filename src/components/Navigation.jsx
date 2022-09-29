import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav>
      <header>
        <section className="header">
          <Logo />
          <div className={`menu ${navbar ? 'navbar' : ''}`} >
            <div className='none'>
              {
                navbar ?  <Logo /> : ''
              }
            </div>
            <ul>
              <li>
                <Link to='/'>
                  <select name="Products" id="">
                    <option value="0">Products:</option>
                    <option value="1">US Banking</option>
                    <option value="2">Cross border Transfers</option>
                    <option value="3">Local Transfer</option>
                    <option value="4">Account Consolation</option>
                  </select>
                </Link>
              </li>
              <li>
                <Link to='/blog'>
                  blog
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  contact us
                </Link>
              </li>
            </ul>
            <div className="started-btn">
              <button className="btn btn-blue">
                Get started
              </button>
            </div>
          </div>
          <button className='menu-btn' onClick={() => setNavbar(!navbar)}>
            {
              navbar ? <FaTimes/ > : <FaBars />
            }
          </button>
        </section>
      </header>
    </nav>
  )
}

export default Navigation