interface PageProps{
  params:{
  slug: string
}
}


const page = ({params}:PageProps) => {
  return (
    <div>page</div>
  )
}

export default page