import React from 'react';
import Sidebar from './SideBarUnused';
import TopBar from './TopBar';
import LiveEditor from './LiveEditor';
import SideBarItems from './data/SideBarItemsData'
import SideBar2 from './SideBar2';


const TopBarItems = null

function App() {
  return (
    <div>
       <TopBar items = {TopBarItems}/>
       <SideBar2/>
    </div>
  )
}

export default App