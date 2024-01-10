import { FC } from "react"
import {User} from 'next-auth'

interface UserAccountNavProps{
    user: Pick<User, 'name' | 'email' | 'image'>
}

const UserAccountNav: FC<UserAccountNavProps> = ({user}) => {
  return (
    <div>UserAccountNav</div>
  )
}

export default UserAccountNav