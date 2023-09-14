'use client'

import Menu from '~/components/Menu'
import Logo from '~/components/Logo'

const Topbar = () => {
  return (
    <div className="dark:bg-brand-green sticky top-0 z-50 flex min-h-[60px] items-center justify-between border-b border-solid bg-white pl-2 pr-6 lg:hidden">
      <div className="flex items-center">
        <Menu />
        <Logo />
      </div>
    </div>
  )
}

export default Topbar
