import Link from "next/link"
import { Icons } from "./Icons"
import { buttonVariants } from "./ui/Button"

const Navbar = () => {
  return (
    <div className="tw-fixed top- tw-inset-x-0 h-fit tw-bg-zinc-100 border-b tw-border-zinc-300 z-[10] tw-py-2">
    <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
     {/* logo */}
     <Link href='/' className="flex items-center">
        {/* <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6"/> */}
        <p className="hidden text-zinc-700 text-sm font-medium md:block">ShunPost</p>
     </Link>

     {/* search bar */}

     <Link href='/sign-in' className={buttonVariants()}>Sign In</Link>
    </div>
    </div>
  )
}

export default Navbar