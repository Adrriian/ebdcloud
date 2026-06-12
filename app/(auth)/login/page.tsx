"use client";
import { useContext, useEffect, useState } from "react";
import "../../globals.css";
import { LucideEye, LucideView } from "lucide-react";
import { useRouter } from "next/navigation"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase.config";
import { AuthContext } from "@/services/contexts/authContext";
import { getData } from "./data";
import { RoleContext } from "@/services/contexts/roleContext";
import { IgrejaId } from "@/services/contexts/igrejaIDContext";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const router = useRouter()
    const getContextAuth = useContext(AuthContext)
    const getContextRole = useContext(RoleContext)
    const getContextIgrejaId = useContext(IgrejaId)

    const GoLogin = async () => {
        const go = await signInWithEmailAndPassword(auth, 'adrianraulribeiro552@gmail.com', 'V9#rT2!mQ7@xL4$k')

        if (auth.currentUser) {
            const dataAuth = auth.currentUser.uid
            getContextAuth?.setAuthUidValue(dataAuth)
            const snap = await getData(dataAuth)

            if(snap === null){
                return('Deu erro, entre em contato com o suporte')
            }else{
                getContextRole?.setRole(snap.role)
                getContextIgrejaId?.setIgrejaId(snap.igrejaId)
                
            }
            
            router.push('../classrom')
        }


        


    }

    return (

        <div id="loginHidden" className=" min-h-screen min-w-screen flex items-center justify-center bg-white dark:bg-slate-800">
            <div className="bg-slate-800 dark:bg-white p-8 rounded-2xl w-75 sm:w-full max-w-md ">
                <h2 className="text-2xl font-bold text-center mb-6 text-white dark:text-slate-800">Entrar</h2>
                <div className="flex flex-col gap-4">

                    <div>
                        <label className="block text-sm font-medium mb-1 text-white dark:text-slate-800">Email</label>
                        <input id="loginEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com"
                            className="w-full text-white dark:text-slate-800  placeholder:text-white dark:placeholder:text-slate-800 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div className="flex items-center   gap-2">
                        <input id="loginPassword" type="checkbox" className="w-5" />
                        <label className="text-sm font-medium text-white dark:text-slate-800">Mantenha-me Conectado</label>
                    </div>
                    <button onClick={GoLogin} className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                        Entrar
                    </button>
                </div>
            </div>
        </div>

    )
}