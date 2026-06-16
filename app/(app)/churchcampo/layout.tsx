'use client'
import { LucideCaptions, LucideChurch, LucideGraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";

import { ReactNode } from "react";

type typeReactNode = {
    children: ReactNode;
}
export default function ChurchLayout({children}:typeReactNode){
    const Router = useRouter()
    
    return(
        <>
            {children}
            <footer className="w-40 bg-gray-700 rounded-xl px-5 py-2 gap-5 flex items-center justify-center">
                <div className="cursor-pointer flex flex-col items-center justify-center gap-1"  onClick={()=> Router.push('/churchcampo/igreja')}>
                    <LucideChurch size={18}/>
                    <h1>Igreja</h1>
                </div>
                <div className="cursor-pointer flex flex-col items-center justify-center gap-1"  onClick={()=> Router.push('/churchcampo/turma')}>
                    <LucideGraduationCap size={18}/>
                    <h1 className="text-sm">Turma</h1>
                </div>
            </footer>
        </>
    )
}