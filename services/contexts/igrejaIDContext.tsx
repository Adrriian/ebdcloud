'use client'
import { createContext, ReactNode, useState } from "react"

type IgrejaIdType = null | {
    igrejaId: string,
    setIgrejaId: React.Dispatch<React.SetStateAction<string>>
}

export const IgrejaId = createContext<IgrejaIdType>(null)

type children = {
    children: ReactNode
}
export default function IgrejaIdContext({ children }: children) {
    const [igrejaId, setIgrejaId] = useState('')
    return (
        <IgrejaId.Provider value={{ igrejaId, setIgrejaId }}>
            {children}
        </IgrejaId.Provider>
    )
}