import { Menu as MenuIcon } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet'
import { Button } from '~/components/ui/button'
import SidebarOptions from '~/components/SidebarOptions'

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[260px] p-0">
        <SidebarOptions />
      </SheetContent>
    </Sheet>
  )
}

export default Menu
