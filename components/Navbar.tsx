import React from 'react'
import Link from 'next/link'
import { Moon, User,Settings, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

const Navbar = () => {
  return (
    <nav className='p-4 flex justify-between items-center'>
{/* LEFT */}
    collapseButton

    {/* RIGHT */}
<div className='flex items-center gap-4'>   
    <Link href="/">Dashbord</Link>
    <Moon />

    <DropdownMenu>
  <DropdownMenuTrigger>
   <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>
        My Account
        </DropdownMenuLabel>
    <DropdownMenuSeparator />
      <DropdownMenuItem>
        <User className='h-[1.2rem] w-[1.2 rem] mr-2'/>Profile
        </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className='h-[1.2rem] w-[1.2 rem] mr-2' />Settings
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <LogOut className='h-[1.2rem] w-[1.2 rem] mr-2'/>Log out
      </DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>



</div>
    </nav>
  )
}

export default Navbar