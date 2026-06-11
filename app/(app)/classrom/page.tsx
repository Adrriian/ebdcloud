'use client'
import { LucideMenu } from "lucide-react";


export default function ClassRomApp() {
    return (
        <div id="aulas" className="p-2 dark:text-white ">
            <div className="flex flex-col gap-4">
                <div className="flex items-center ">
                    <div className="flex-3">
                        <h1 className="font-bold text-2xl">Aulas</h1>
                        <h1 className="text-gray-500 text-[10px] md:text-xl lg:text-2xl   smalxl:w-full w-full">Gerencie as aulas da Escola Bíblica Dominical</h1>
                    </div>
                    <div id="newAula"
                        className="flex-1 flex p-2 gap-1 items-center rounded-2xl bg-indigo-700 cursor-pointer smalxl:w-fit hover:bg-indigo-500 transition-all duration-300 ease-linear">
                        <LucideMenu/>
                        <h1 className="text-white text-[12px] font-bold smalxl:text-sm md:text-base">Nova Aula
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2 smalxl:flex-row ">
                    <select id="aulasYers"
                        className="outline-0 border-2 border-gray-500 rounded-2xl p-2 w-full md:w-70">
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">Todos os anos</option>
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">2026</option>
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">2027</option>
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">2028</option>
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">2029</option>
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">2030</option>
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">2031</option>
                    </select>
                    <select id="aulasTrimestres"
                        className="outline-0 border-2 border-gray-500 rounded-2xl p-2  w-full md:w-70">
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">Todos os Trimestre
                        </option>
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">Primeiro Trimestre
                        </option>
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">Segundo Trimestre
                        </option>
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">Terceiro Trimestre
                        </option>
                        <option className="rounded-2xl dark:text-white dark:bg-slate-900">Quarto Trimestre
                        </option>
                    </select>
                </div>
                <div id="showAulas" className="bg-slate-800 overflow-y-scroll h-80 rounded-xl p-5">
                </div>
            </div>
        </div>
    )
}