import { FC } from "react"
import {User} from 'next-auth'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/DropdownMenu"
import UserAvatar from "./UserAvatar"
import Link from "next/link"
import {signOut} from "next-auth'

interface UserAccountNavProps{
    user: Pick<User, 'name' | 'email' | 'image'>
}

const UserAccountNav: FC<UserAccountNavProps> = ({user}) => {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar user={user}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none"
                >
                {user.name && <p className="font-medium">{user.name}</p>}
                {user.email && <p className="w-[200px] trancate text-[0.7rem] text-zinc-700">{user.email}</p>}
                </div>
                </div>

            <DropdownMenuSeparator/>

            <DropdownMenuItem asChild>
                <Link href='/'>Feed</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href='/r/create'>Create Community</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href='/settings'>Settings</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator/>
            
            <DropdownMenuItem className="cursor-pointer" onSelect={(e)=>{
                e.preventDefault()
                signOut({
                    
                })
            }}>
                Sign Out
            </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default UserAccountNav