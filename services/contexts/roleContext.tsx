'use client'
import { createContext, ReactNode, useState } from "react"


type RoleContextType = null | {
    role: string,
    setRole: React.Dispatch<React.SetStateAction<string>>
}
export const RoleContext = createContext<RoleContextType>(null)
type Children = {
    children: ReactNode
}

export default function RoleContextApp({ children }: Children) {
    const [role, setRole] = useState('')
    return (
        <RoleContext.Provider value={{ role, setRole }}>
            {children}
        </RoleContext.Provider>
    )
}