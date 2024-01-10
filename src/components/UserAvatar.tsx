import { FC } from 'react'
import {User} from 'next-auth'

interface UserAvatarProps{
    user: Pick<User, 'name' | 'image'>
}

const UserAvatar: FC<UserAvatarProps> = ({user}) => {
  return (
    <div>UserAvatar</div>
  )
}

export default UserAvatar