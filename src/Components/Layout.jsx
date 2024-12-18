
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className='px-[128px] py-[39px] font-body'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout