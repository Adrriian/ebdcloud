"use client";
import { useState } from "react";
import "../../globals.css";
import { LucideEye, LucideView } from "lucide-react";
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const [password, setPassword] = useState("password");
    const router = useRouter()
    const viewPassword = () => {
        setPassword(password === "password" ? "text" : "password")
    }

    const GoLogin = () => {
        
        router.push('../dashboard')
        
    }

    return (

        <div id="loginHidden" className=" min-h-screen min-w-screen flex items-center justify-center bg-white dark:bg-slate-800">
            <div className="bg-slate-800 dark:bg-white p-8 rounded-2xl w-75 sm:w-full max-w-md ">
                <h2 className="text-2xl font-bold text-center mb-6 text-white dark:text-slate-800">Entrar</h2>
                <div className="flex flex-col gap-4">

                    <div>
                        <label className="block text-sm font-medium mb-1 text-white dark:text-slate-800">Email</label>
                        <input id="loginEmail" type="email" placeholder="seu@email.com"
                            className="w-full text-white dark:text-slate-800  placeholder:text-white dark:placeholder:text-slate-800 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-white dark:text-slate-800">Senha</label>

                        <div className="flex items-center">
                            <div className="border border-slate-800 w-full rounded-lg">
                                <input id="loginPassword" type={password} placeholder="********" className="w-4/5 outline-0 px-4 py-2 text-white placeholder:font-bold dark:text-slate-800  placeholder:text-white dark:placeholder:text-slate-800 " />
                            </div>
                            <div onClick={viewPassword} className="-ml-10 cursor-pointer">
                                <LucideEye className="dark:text-slate-800 text-white" />
                            </div>

                        </div>
                    </div>
                    <button onClick={GoLogin} className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                        Entrar
                    </button>
                </div>
            </div>
        </div>

    )
}