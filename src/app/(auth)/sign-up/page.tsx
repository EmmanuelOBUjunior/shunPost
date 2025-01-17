import SignUp from '@/components/SignUp'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='absolute inset-0'>
        <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20'>
        <Link href='/' className= {cn(buttonVariants({variant: 'ghost'}), 'self-start mt-20')}><ChevronLeftIcon className='mr-2 w-4 h-4'/>Home</Link>
        <SignUp/>
        </div>
    </div>
  )
}

export default SignInPage