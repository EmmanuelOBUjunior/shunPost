'use client'

import { Session } from "next-auth"
import { usePathname, useRouter } from "next/navigation"
import { FC } from "react"

interface MiniCreatePostProps{
    session: Session
}

const MiniCreatePost: FC<MiniCreatePostProps> = ({session}) => {
    const router = useRouter()
    const pathName = usePathname()
  return (
    <li className="overflow-hidden rounded-md bg-white shadow">

    </li>
  )
}

export default MiniCreatePost