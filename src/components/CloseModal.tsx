import { X } from "lucide-react"
import { Button } from "./ui/Button"

const CloseModal = () => {
  return (
    <Button variant='subtle' className="h-6 w-6 rounded-md" aria-label="close-modal">
        <X className="h-4 w-4"/>
    </Button>
  )
}

export default CloseModal