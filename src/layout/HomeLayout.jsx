/* eslint-disable react/prop-types */
import MenuBar from '../components/MenuBar'
import SideMenu from '../components/SideMenu'
function HomeLayout({children}) {
  return (
    <div className='h-[100vh] w-auto flex flex-col bg-[#F5F5F5]'>
        <MenuBar></MenuBar>
        <div className="flex mt-1 gap-1">
            <SideMenu/>
            {children}
        </div>
    </div>
  )
}

export default HomeLayout