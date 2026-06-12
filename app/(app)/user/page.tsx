'use client'

import { useEffect, useState } from "react";
import { getDados } from "./data";

export default function UsertApp() {
    const [user, setUser] = useState<any>(null)
    const [carregar, setCarregar] = useState(true)
    
    useEffect(() => {
        async function carregarDados() {
            try {
                const data = await getDados()
                setUser(data)
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

                {/* Cabeçalho */}
                <div className="flex items-center gap-5 border-b pb-6 mb-6">

                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold">
                        <h1 className="text-slate-800">{user[0].name.slice(0,1)}</h1>
                    </div>

                    <div>
                        <h2 className="text-2xl text-white font-semibold">
                            {user[0].name}
                        </h2>

                        <p className="text-gray-500">
                            {user[0].position}
                        </p>

                        <p className="text-sm text-gray-400">
                            {user[0].email}
                        </p>
                    </div>

                </div>

                {/* Informações */}
                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <label className="font-medium">
                            Nome Completo
                        </label>

                        <input disabled
                            className="w-full mt-2  rounded-lg p-3 bg-gray-700" value={user[0].name}
                            placeholder="Nome completo"
                        />
                    </div>

                    <div>
                        <label className="font-medium">
                            E-mail
                        </label>

                        <input disabled
                            className="w-full mt-2  rounded-lg p-3 bg-gray-700"
                            placeholder="Email" value={user[0].email}
                        />
                    </div>

                    <div>
                        <label className="font-medium">
                            Telefone
                        </label>

                        <input disabled
                            className="w-full mt-2  rounded-lg p-3 bg-gray-700"
                            placeholder="Telefone" value={user[0].phone}
                        />
                    </div>

                    <div>
                        <label className="font-medium">
                            Cargo
                        </label>
                        <input onClick={()=>{}} disabled
                            className="w-full mt-2  rounded-lg p-3 bg-gray-700"
                            placeholder="Telefone" value={user[0].position}
                        />

                    </div>

                </div>

                {/* Alterar senha 
                <div className="mt-10 border-t pt-8">

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
