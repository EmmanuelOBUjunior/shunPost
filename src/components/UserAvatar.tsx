import { FC } from 'react'
import {User} from 'next-auth'
import Image from 'next/image'
import { AvatarFallback } from './ui/avatar'
import { Icons } from './Icons'
import { AvatarProps } from '@radix-ui/react-avatar'

interface UserAvatarProps extends AvatarProps{
    user: Pick<User, 'name' | 'image'>
}

const UserAvatar: FC<UserAvatarProps> = ({user, ...props}) => {
  return (
    <div>
        {user.image ? (<div className='relative aspect-square h-full w-full'>
        <Image
        fill
        src={user.image}
        alt='Profile Picture'
        referrerPolicy='no-referrer'
        />
        </div>):
        (<AvatarFallback>
            <span className='sr-only'>{user?.name}</span>
            <Icons.user className='h-4 w-4'/>
        </AvatarFallback>)
        }
    </div>
  )
}

export default UserAvatar