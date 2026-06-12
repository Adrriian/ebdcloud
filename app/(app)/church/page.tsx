'use client'
import { LucideCircleX, LucidePlus } from "lucide-react";
import { useState } from "react";

export default function ChurchtApp() {
    const role = "user"
    const [statusmodal, setStatusModal] = useState(false)
    return (
        <section id="alunos" className=" p-2 dark:text-white">
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-[60%_40%] sm:grid-cols-[80%_20%] md:grid-cols-[80%_20%] lg:grid-cols-[80%_20%] xl:grid-cols-[90%_10%]">
                    <div>
                        <h1 className="font-bold text-2xl">Igrejas</h1>
                        <h1 className="text-gray-500 text-[10px] md:text-xl lg:text-2xl ">
                            Adicione novas Igrejas do seu campo</h1>
                    </div>
                    <div onClick={() => setStatusModal(true)} className="flex px-2 py-3 gap-1 items-center justify-center rounded-2xl bg-indigo-700 cursor-pointer  hover:bg-indigo-500 transition-all duration-300 ease-linear">
                        <LucidePlus size={18} />
                        <h1 className="text-white text-[12px] font-bold  md:text-sm">Nova
                            Igreja
                        </h1>
                    </div>
                </div>
                {statusmodal === true &&
                    <div className="bg-black/80 backdrop-blur-xs fixed  top-0 right-0 z-50 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800  w-4/5 h-4/5 overflow-y-scroll rounded-xl">
                            <div className="flex justify-between items-center p-5">
                                <h1>Nova Igreja</h1>
                                <div onClick={() => setStatusModal(false)} className="cursor-pointer">
                                    <LucideCircleX />
                                </div>
                            </div>
                            <hr />
                            <div className="p-5 flex flex-col gap-5 md:grid md:grid-cols-2">
                                <div className="flex flex-col gap-5">
                                    <h1>Nome da Igreja</h1>
                                    <input type="text" placeholder="Nome da Igreja" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                </div>
                                {role === 'admin' ? (
                                    <>
                                        <div className="flex flex-col gap-5">
                                            <h1>Estado</h1>
                                            <select className="text-slate-800 p-2 rounded outline-0 bg-white w-full">
                                                <option>Selecione um Estado</option>
                                                <option>SC</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Cidade:</h1>
                                            <select className="text-slate-800 p-2 rounded outline-0 bg-white w-full">
                                                <option>Selecione uma Cidade</option>
                                                <option>Pouso Redondo</option>
                                            </select>
                                        </div>
                                    </>) : (
                                    <>
                                        <div className="flex flex-col gap-5">
                                            <h1>Estado</h1>
                                            <input disabled type="text" value="Sc" className="text-white p-2 rounded outline-0 bg-gray-500 w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Cidade:</h1>
                                            <input disabled type="text" value="Pouso Redondo" className="text-white p-2 rounded outline-0 bg-gray-500 w-full"  />
                                        </div>
                                    </>
                                )}

                                <div className="flex flex-col gap-5">
                                    <h1>Rua</h1>
                                    <input type="text" placeholder="Nome da Igreja" className="text-slate-800 p-2 rounded outline-0 bg-white w-full"/>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <h1>Numero</h1>
                                    <input type="text" placeholder="Nome da Igreja" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                </div>
                                <div className="flex flex-col gap-5">
                                    <h1>bairro</h1>
                                    <input type="text" placeholder="Nome da Igreja"className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                </div>

                            </div>
                            <hr />
                            <div className="flex flex-col gap-5 p-5">
                                <div className="flex flex-col gap-5">
                                    <h1>Nome</h1>
                                    <input type="text" placeholder="Nome da Igreja" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                </div>
                                <div className="flex flex-col gap-5">
                                    <h1>Email</h1>
                                    <input type="text" placeholder="Nome da Igreja" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                </div>
                                <div className="flex flex-col gap-5">
                                    <h1>Cargo:</h1>
                                    <select className="text-slate-800 p-2 rounded outline-0 bg-white w-full" >
                                        <option>Selecione uma Cidade</option>
                                        <option>Cordenador</option>
                                    </select>
                                </div>
                            </div>
                            <hr />
                            <div  className="flex flex-col gap-5 p-5 md:justify-center md:items-center">
                                <div className="flex w-full md:w-md p-5 items-center justify-center bg-violet-700 hover:bg-violet-500 rounded-2xl cursor-pointer transition-all duration-300 ease-linear">
                                    <h1 >Cadastrar Igreja</h1>
                                </div>
                            </div>

                        </div>
                    </div>}
                <div className="bg-slate-800 rounded-xl ">
                    <div id="renderClass" className="p-2 ">

                    </div>
                </div>

            </div>
        </section>
    )
}