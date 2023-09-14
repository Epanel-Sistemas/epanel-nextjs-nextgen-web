import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

import { type NavigationOptionProps } from '~/components/SidebarOptions/options'
import { cn } from '~/utils'

type Props = {
  open?: boolean
  option: NavigationOptionProps
}

const SidebarOption = ({ open, option }: Props) => {
  const router = useRouter()
  const pathName = usePathname()

  const [isOpen, setOpen] = useState(open)

  const currentPath = pathName.split('/')[1]

  const handleSelect = () => {
    if (option.subOptions && option.subOptions.length > 0) {
      const firstOption = option.subOptions[0]
      if (firstOption?.href && !isOpen) {
        void router.push(firstOption.href)
      }
      setOpen(!isOpen)
    } else {
      handleSelectOption(option)
    }
  }

  const handleSelectOption = (option: NavigationOptionProps) => {
    if (option.href) {
      void router.push(option.href)
    }
  }

  return (
    <div key={option.title}>
      <div
        onClick={handleSelect}
        className={cn(
          'flex items-center justify-between rounded-md p-2.5 hover:cursor-pointer hover:bg-slate-100',
          isOpen && 'bg-slate-100'
        )}
      >
        <div className="flex items-center">
          {option.icon &&
            React.cloneElement(option.icon, {
              size: 20
            })}
          <span className="ml-3">{option.title}</span>
        </div>
        {option.subOptions &&
          (isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />)}
      </div>
      {option.subOptions && option.subOptions.length > 0 && (
        <div
          className={cn('overflow-hidden transition-all', {
            'max-h-[1000px]': isOpen,
            'max-h-0': !isOpen
          })}
        >
          {option.subOptions.map((subOption, index) => {
            const isFirstOption = index === 0
            const isSubMenuActive =
              currentPath === subOption.href?.split('/')[1]

            return (
              <span
                key={subOption.href}
                onClick={() => handleSelectOption(subOption)}
                className={cn(
                  'flex rounded-md py-2.5 pl-3 hover:cursor-pointer hover:bg-slate-100',
                  {
                    'mt-0.5': isFirstOption
                  }
                )}
              >
                <div className="flex items-center pl-1">
                  <div className="h-1.5 w-1.5">
                    {isSubMenuActive && (
                      <div className="bg-brand-green h-1.5 w-1.5 rounded-full" />
                    )}
                  </div>
                  {subOption.icon &&
                    React.cloneElement(subOption.icon, {
                      size: 18
                    })}
                </div>
                <span
                  className={cn(
                    'ml-5 text-sm',
                    isSubMenuActive ? 'font-semibold' : 'font-normal'
                  )}
                >
                  {subOption.title}
                </span>
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SidebarOption
