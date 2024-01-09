import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export function Container({children} : Props){
    return(
        <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
            {children}
        </div>
    )
}