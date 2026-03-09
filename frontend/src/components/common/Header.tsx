import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { LogOut, User } from 'lucide-react'
export default function Header() {
  return (
    <header className="bg-surface flex h-16 w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="text-primary text-2xl font-black tracking-tighter">
          PIN-IT
        </div>
      </div>
      <NavigationMenu className="mx-auto max-w-max">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              탐색하기
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              나의 지도
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              랜덤 여행
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <User />
          <span className="sr-only">프로필</span>
        </Button>
      </div>
    </header>
  )
}
