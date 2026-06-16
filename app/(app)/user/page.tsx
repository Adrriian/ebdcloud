'use client'

import { useContext, useEffect, useState } from "react";
import { dataUser, getDados } from "./data/downData";
import { LucideLock } from "lucide-react";
import { AuthContext } from "@/services/contexts/authContext";
import { updateData } from "./functions/changeData";

export default function UsertApp() {
    const [user, setUser] = useState<dataUser>()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [carregar, setCarregar] = useState(true)
    const auth = useContext(AuthContext)
    useEffect(() => {
        async function carregarDados() {


            try {
                if (auth?.AuthUidValue) {
                    const data = await getDados(auth.AuthUidValue);
                    if (data) {
                        setUser(data)
                    }

                }

            } catch (error) {
                console.log(error)
            } finally {
                setCarregar(false)
            }

        }
        carregarDados()
    }, [])



    if (carregar) {
        return (
            <div className="max-w-5xl mx-auto p-6 animate-pulse">
                <div className="h-10 w-52 bg-gray-200 rounded mb-8"></div>

                <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6">

                    <div className="flex items-center gap-5 border-b pb-6 mb-6">

                        <div className="w-24 h-24 rounded-full bg-gray-200"></div>

                        <div className="space-y-3">
                            <div className="h-6 w-48 bg-gray-200 rounded"></div>
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                            <div className="h-4 w-40 bg-gray-200 rounded"></div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">
                Meu Perfil
            </h1>
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6">
                <div className="flex items-center gap-5 border-b pb-6 mb-6">
                    <div className="w-14 h-14 rounded-full p-5 bg-gray-200 flex items-center justify-center text-xl font-bold">
                        <h1 className="text-slate-800">{user?.name.slice(0, 1)}</h1>
                    </div>
                    <div>
                        <h2 className="text-sm text-white font-semibold">
                            {user?.name}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {user?.role}
                        </p>
                        <p className="text-[10px] text-gray-400">
                            {user?.email}
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="font-medium">
                            Nome Completo
                        </label>
                        <input type="text"
                            className="w-full mt-2  rounded-lg p-3 bg-gray-700"
                            placeholder={user?.name} value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 ">
                            <label className="font-medium">
                                E-mail
                            </label>
                            <LucideLock className="md:hidden" color={'gray'} size={18} />
                        </div>
                        <div className="flex items-center justify-center">
                            <input disabled
                                className="w-full mt-2  rounded-lg p-3 bg-gray-700"
                                placeholder={user?.email}
                            />
                            <div className="-ml-12 mt-2 p-3 hidden md:flex ">
                                <LucideLock color={'gray'} size={20} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="font-medium">
                            Telefone
                        </label>

                        <input type="number"
                            className="w-full mt-2  rounded-lg p-3 bg-gray-700"
                            placeholder={user?.phone} value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 ">
                            <label className="font-medium">
                                Cargo
                            </label>
                            <LucideLock className="md:hidden" color={'gray'} size={18} />
                        </div>
                        <div className="flex items-center justify-center">
                            <input onClick={() => { }} disabled
                                className="w-full mt-2  rounded-lg p-3 bg-gray-700"
                                placeholder={user?.role}
                            />
                            <div className="-ml-12 mt-2 p-3 hidden md:flex">
                                <LucideLock color={'gray'} size={20} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div onClick={() => {
                        if (!auth?.AuthUidValue) return null
                        updateData({ phone, name, uid:auth?.AuthUidValue })
                    }}
                        className="bg-violet-500 mt-5 w-full sm:w-50 hover:bg-violet-700 flex items-center justify-center p-3 rounded-lg cursor-pointer">
                        <h1>Trocar Dados</h1>
                    </div>
                </div>

               
                {/*<div className="mt-10 border-t pt-8">

                    <h2 className="text-xl font-semibold mb-5">
                        Alterar Senha
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <input
                            className="border rounded-lg p-3"
                            placeholder="Senha atual"
                            type="password"
                        />

                        <input
                            className="border rounded-lg p-3"
                            placeholder="Nova senha"
                            type="password"
                        />

                        <input
                            className="border rounded-lg p-3"
                            placeholder="Confirmar senha"
                            type="password"
                        />

                    </div>

                </div>

                <div className="flex justify-end gap-4 mt-10">

                    <button className="px-5 py-3 rounded-lg border">
                        Cancelar
                    </button>

                    <button className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                        Salvar Alterações
                    </button>

                </div>*/}

            </div>
        </div>

    )
}
