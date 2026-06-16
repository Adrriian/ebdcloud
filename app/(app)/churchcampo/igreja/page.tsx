'use client'
import { LucideCircle, LucideCircleX, LucidePlus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { getChurch } from "../../student/data";
import { RoleContext } from "@/services/contexts/roleContext";
import { IgrejaId } from "@/services/contexts/igrejaIDContext";


export default function ChurchtApp() {
    const [stateId, setStateId] = useState('')
    const role = useContext(RoleContext)
    const id = useContext(IgrejaId)
    const [statusmodal, setStatusModal] = useState(false)
    const [carregar, setCarregar] = useState(false)
    const [dataChurch, setDataChurch] = useState<any>()
    const [dataChurchAdmin, setDataChurchAdmin] = useState<any>()
    
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
                    (carregar === true ? (
                      <div className="bg-black/80 backdrop-blur-xs fixed  top-0 right-0 z-50 w-full h-full flex items-center justify-center">
                                <div className="bg-slate-800  w-4/5 h-4/5  rounded-xl">
                                    <div className="flex justify-between items-center p-5">
                                        <h1>Nova Turma</h1>
                                        <div onClick={() => setStatusModal(false)} className="cursor-pointer">
                                            <LucideCircleX />
                                        </div>
                                    </div>
                                    <hr />
                                    <LucideCircle />
                                </div>
                    </div>
                    ) :( 

                            <div className="bg-black/80 backdrop-blur-xs fixed  top-0 right-0 z-50 w-full h-full flex items-center justify-center">
                                <div className="bg-slate-800  w-4/5 h-4/5 overflow-y-scroll rounded-xl">
                                    <div className="flex justify-between items-center p-5">
                                        <h1>Nova Turma</h1>
                                        <div onClick={() => setStatusModal(false)} className="cursor-pointer">
                                            <LucideCircleX />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="p-5 flex flex-col gap-5 md:grid md:grid-cols-2">
                                        <div className="flex flex-col gap-5">
                                            <h1>Igreja</h1>
                                            <input type="text" placeholder="Nome da Igreja" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Congregação</h1>
                                            <input type="text" placeholder="Digite a sua Congreagação" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>

                                        <div className="flex flex-col gap-5">
                                            <h1>Rua</h1>
                                            <input type="text" placeholder="Rua da Igreja" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Numero</h1>
                                            <input type="text" placeholder="Número da Igreja" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Bairro</h1>
                                            <input type="text" placeholder="Bairro da Igreja" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Cidade</h1>
                                            <input type="text" placeholder='{dataChurch[0].city}' value='{dataChurch[0].city}' className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>


                                    </div>

                                    <div className="flex justify-between items-center pl-5">
                                        <h1>Líder</h1>
                                    </div>
                                    <div className="flex flex-col gap-5 p-5  md:grid md:grid-cols-2">

                                        <div className="flex flex-col gap-5">
                                            <h1>Nome</h1>
                                            <input type="text" placeholder="Nome do Líder" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Email</h1>
                                            <input type="text" placeholder="Nome da Igreja" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Data de Aniversário</h1>
                                            <input type="text" placeholder="Nome da Igreja" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Cargo:</h1>
                                            <select className="text-slate-800 p-2 rounded outline-0 bg-white w-full" >
                                                <option>Selecione uma Cidade</option>
                                                <option>Cordenador</option>
                                                <option>Líder</option>
                                                <option>Professor</option>
                                                <option>Secretária</option>
                                                <option>Músico</option>
                                                <option>Auxiliar</option>
                                            </select>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex flex-col gap-5 p-5 md:justify-center md:items-center">
                                        <div className="flex w-full md:w-md p-5 items-center justify-center bg-violet-700 hover:bg-violet-500 rounded-2xl cursor-pointer transition-all duration-300 ease-linear">
                                            <h1 >Cadastrar Igreja</h1>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}


                <div className="bg-slate-800 rounded-xl p-5">


                </div>

            </div>
        </section>
    )
}