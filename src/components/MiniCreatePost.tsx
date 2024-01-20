'use client'

import { Session } from "next-auth"
import { usePathname, useRouter } from "next/navigation"
import { FC } from "react"
import UserAvatar from "./UserAvatar"

interface MiniCreatePostProps{
    session: Session
}

const MiniCreatePost: FC<MiniCreatePostProps> = ({session}) => {
    const router = useRouter()
    const pathName = usePathname()
  return (
    <li className="overflow-hidden rounded-md bg-white shadow">
        <div className="h-full px-6 py-4 sm:flex sm:justify-between gap-6">
            <div className="relative">
                <UserAvatar
                user={
                    {
                        name: session?.name || null,
                        image: session?.image || null
                    }
                }
                />
            </div>
        </div>
    </li>
  )
}

export default MiniCreatePost