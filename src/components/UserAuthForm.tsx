'use client'
import { cn } from "../lib/utils"
import { Button } from "./ui/Button"
import { FC, useState } from "react"
import {signIn} from 'next-auth/react'
import { Icons } from "./Icons"
import { useToast } from "@/hooks/use-toast"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement>{}

const UserAuthForm:FC<UserAuthFormProps> = ({className, ...props}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {toast} = useToast();
    const loginWithGoogle = async() =>{
        setIsLoading(true)

        try {
            await signIn('google')
            
        } catch (error) {
            //Toast Notification
            toast({
                title: 'There was an error',
                description: 'An error occurred while trying to login with Google',
                variant: 'destructive',
            })
        }finally {
            setIsLoading(false)
        }
    }
  return (
    <div className={cn('flex justify-center', className)}{...props}>
        <Button 
        size='sm'
        isLoading = {isLoading} 
        className="w-full" 
        onClick={loginWithGoogle}
        >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2"/>}
        Google
        </Button>
    </div>
  )
}

export default UserAuthForm