import Link from "next/link"
import { toast } from "./use-toast"
import { buttonVariants } from "@/components/ui/Button"

export const useCustomToast = ()=>{
    const loginToast = () =>{
        const {dismiss} = toast({
            title: "Login required.",
            description: "You need to be authorized to perform this action",
            variant: 'destructive',
            action:(
                <Link className={buttonVariants({variant="outline"})}Login</Link>
            )
        })
    }

    return {loginToast}
}