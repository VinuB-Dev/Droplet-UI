import '../index.css'
import logo from '../images/logo-white-big1.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar1'>
      <div style={{ height: '2rem' }}>
        <Link to='/'>
          <img className='logo' src={logo} alt='' />
        </Link>
      </div>
      <ul className='right-nav1'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/components'>Components</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  )
}
