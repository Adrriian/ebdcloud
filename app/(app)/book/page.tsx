'use client'
import { LucideMenu } from "lucide-react";


export default function BookApp() {
    return (
        <section id="livros" className="p-2 dark:text-white">
                        <div className="flex flex-col gap-4 ">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="font-bold text-2xl">Revistas</h1>
                                    <h1 className="text-gray-500 text-[10px] md:text-xl lg:text-2xl  w-40 smalxl:w-full">
                                        Registro de Pedidos Das Revistas</h1>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 smalxl:flex-row ">
                                <select className="outline-0 border-2 border-gray-500 rounded-2xl p-2  w-full md:w-70">
                                    <option className="rounded-2xl dark:text-white dark:bg-slate-900">Todos as Aulas
                                    </option>
                                    <option className="rounded-2xl dark:text-white dark:bg-slate-900">Aula data tal</option>
                                    <option className="rounded-2xl dark:text-white dark:bg-slate-900">Aula data tal</option>
                                    <option className="rounded-2xl dark:text-white dark:bg-slate-900">Aula data tal</option>
                                    <option className="rounded-2xl dark:text-white dark:bg-slate-900">Aula data tal</option>
                                </select>
                            </div>
                            <div className="bg-slate-700 text-center overflow-y-scroll h-80 rounded-xl p-5">
                                <h1>Em desenvolvimento</h1>
                            </div>
                        </div>
                    </section>
    )
}