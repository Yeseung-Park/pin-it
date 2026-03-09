import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu'
import { Button } from '../ui/button'
import { CircleUserRound, LogOut, User } from 'lucide-react'
export default function Header() {
  return (
    <header className="bg-surface flex h-16 w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="text-primary text-2xl font-black tracking-tighter">
          PIN-IT
        </div>
      </div>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuContent>
                <NavigationMenuLink>test</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
          {/* <CircleUserRound className='h-5 w-5'/> */}
          <span className="sr-only">마이페이지</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <LogOut className="h-5 w-5" />
          <span className="sr-only">로그아웃</span>
        </Button>
      </div>
    </header>
  )
}
