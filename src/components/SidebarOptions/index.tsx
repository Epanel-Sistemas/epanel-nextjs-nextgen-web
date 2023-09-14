import React from 'react'
import { usePathname } from 'next/navigation'

import Logo from '~/components/Logo'
import SidebarOption from '~/components/SidebarOption'
import { sidebarOptions } from '~/components/SidebarOptions/options'

const SidebarOptions = () => {
  const pathName = usePathname()

  const isRootMenuOpen = (key: string) => {
    const rootMenu = sidebarOptions.find((option) => option.key === key)
    if (!rootMenu) return false
    return rootMenu.subOptions?.some((option) =>
      pathName.includes(option.href ?? '')
    )
  }

  return (
    <div className="flex-grow">
      <div className="flex h-[96px] items-center justify-between p-6">
        <Logo />
      </div>
      <div className="flex flex-col space-y-2 px-4 text-base font-medium">
        {sidebarOptions.map((option) => {
          return (
            <SidebarOption
              key={option.key}
              open={isRootMenuOpen(option.key)}
              option={option}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SidebarOptions
