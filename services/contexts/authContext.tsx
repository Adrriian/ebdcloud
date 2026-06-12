'use client'

import {  createContext, ReactNode, useState } from "react"


type AuthUidtype = null| {
    AuthUidValue:string,
    setAuthUidValue: React.Dispatch<React.SetStateAction<string>>

}
export const AuthContext = createContext<AuthUidtype>(null)


type children ={
    children: ReactNode
}

export default function AuthProvider({children}:children){
    const [AuthUidValue, setAuthUidValue ] = useState('')
    return(
        <AuthContext.Provider value={{AuthUidValue, setAuthUidValue}}>
            {children}
        </AuthContext.Provider>
    )
}