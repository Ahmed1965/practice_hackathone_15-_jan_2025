import { cn } from "@/lib/utils"

interface Props {
    children: React.ReactNode,
    className?:string
}

const Container = ({children, className}: Props) => {
  return (
    <div className={cn('w-full max-w-[1440px] h-[100px]   ',className)}
    
    >{children}</div>
  )
}

export default Container