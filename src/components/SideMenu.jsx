import { NavLink } from "react-router-dom"
import { MdHome } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
function SideMenu() {
  return (
    <div className='bg-[#ffffff] min-h-[89vh] min-w-[16vw] flex-col hidden md:flex'>
      {/* This is a frst part of side menu */}
        <div className="pl-2 pt-7 pr-2 ">
            <ul className="flex flex-col gap-2">
                <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `cursor-pointer text-sm ${isActive ? 'bg-[#F5F5F5]' : 'bg-[#FFFFFF]'} rounded-lg block min-w-[14vh] p-2 font-sans`
                    }
                >
                    <span className="flex justify-start items-center gap-2"> <MdHome className="h-[18px] w-[18px]"/> <p className="subpixel-antialiased text-sm font-sans">Home </p></span>
                </NavLink>
                </li>
                <li>
                <NavLink
                  to='/charts'
                  className={({ isActive }) =>
                    `cursor-pointer text-sm ${isActive ? 'bg-[#F5F5F5]' : 'bg-[#FFFFFF]'} rounded-lg block min-w-[14vh] p-2 font-sans`
                    }
                >
                    <span className="flex justify-start items-center gap-2"> <MdOutlineDashboard className="h-[18px] w-[18px]"/> <p className="subpixel-antialiased text-sm font-sans">Visulaized Data </p></span>
                </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideMenu;