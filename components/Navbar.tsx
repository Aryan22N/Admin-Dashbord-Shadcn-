"use client"

import React from 'react'
import Link from 'next/link'
import { Moon,Sun, User,Settings, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useTheme } from "next-themes"
import { Button } from './ui/button'
import { SidebarTrigger } from './ui/sidebar'


const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <nav className='p-4 flex justify-between items-center'>
{/* LEFT */}
    <SidebarTrigger />

    {/* RIGHT */}
<div className='flex items-center gap-4'>   
    <Link href="/">Dashbord</Link>
    {/* Mode */}

      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

{/* Profile */}
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
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
      <DropdownMenuItem variant='destructive'>
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