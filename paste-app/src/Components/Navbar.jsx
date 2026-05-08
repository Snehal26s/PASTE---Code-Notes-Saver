import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-10 px-10 py-5 border-b border-gray-700 text-lg'>

      <NavLink
        to='/'
        className='hover:text-blue-400'
      >
        Home
      </NavLink>

      <NavLink
        to='/pastes'
        className='hover:text-blue-400'
      >
        Pastes
      </NavLink>

    </div>
  )
}

export default Navbar