'use client'

import SidebarOptions from '~/components/SidebarOptions'

const Sidebar = () => {
  return (
    <aside className="hidden h-screen w-[260px] items-stretch border-r border-solid bg-white lg:flex lg:flex-col">
      <SidebarOptions />
    </aside>
  )
}

export default Sidebar
