import { FC } from "react"
import {User} from 'next-auth'
import { DropdownMenu, DropdownMenuTrigger } from "./ui/DropdownMenu"

interface UserAccountNavProps{
    user: Pick<User, 'name' | 'email' | 'image'>
}

const UserAccountNav: FC<UserAccountNavProps> = ({user}) => {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar/>
            </DropdownMenuTrigger>
        </DropdownMenu>
    </div>
  )
}

export default UserAccountNav