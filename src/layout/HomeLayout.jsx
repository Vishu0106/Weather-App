import MenuBar from '../components/MenuBar'
import SideMenu from '../components/SideMenu'
function HomeLayout() {
  return (
    <div className='h-[100vh] w-auto flex flex-col bg-[#F5F5F5]'>
        <MenuBar></MenuBar>
        <div className='flex mt-1'>
            <SideMenu></SideMenu>
        </div>
    </div>
  )
}

export default HomeLayout