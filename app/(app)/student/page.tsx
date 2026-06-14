'use client'
import { LucideCircleX, LucideUserPlus, LucideUserPlus2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { getChurch } from "./data";
import { IgrejaId } from "@/services/contexts/igrejaIDContext";


export default function StudentApp() {
    const [modal, setModal] = useState(false)
    const [dataChurch, setDataChurch] = useState<any>('')
    const [carregar, setCarregar] = useState(true)
    const id = useContext(IgrejaId)
  
    useEffect(() => {
        async function renderChurch() {
            try {
                const data = await getChurch(id?.igrejaId)
                setDataChurch(data)
            }
            catch (error) {
                console.log(error)
            } finally {
                setCarregar(false)
            }
        }

        renderChurch()
    }, [])
    console.log(dataChurch)

    return (
        <section id="alunos" className=" p-2 dark:text-white">
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-[60%_40%] sm:grid-cols-[80%_20%] md:grid-cols-[80%_20%] lg:grid-cols-[80%_20%] xl:grid-cols-[90%_10%]">
                    <div>
                        <h1 className="font-bold text-2xl">Turmas</h1>
                        <h1 className="text-gray-500 text-[10px] md:text-xl lg:text-2xl  ">
                            Gerencie os alunos/turma da Escola Bíblica Dominical</h1>
                    </div>
                    <div onClick={() => { setModal(true) }} className="flex p-2 gap-2 items-center rounded-2xl bg-indigo-700 cursor-pointer smalxl:w-fit hover:bg-indigo-500 transition-all duration-300 ease-linear">
                        <LucideUserPlus2 />
                        <h1 className="text-white text-[12px] font-bold  ">Nova
                            Turma
                        </h1>
                    </div>
                </div>

                {modal === true &&
                    (carregar === true ? (<h1>carregando...</h1>) : (
                        <div className="bg-black/80 backdrop-blur-xs fixed  top-0 right-0 z-50 w-full h-full flex items-center justify-center">
                            <div className="bg-slate-800  w-4/5 h-4/5 overflow-y-scroll rounded-xl">
                                <div className="flex justify-between items-center p-5">
                                    <h1>Nova Turma</h1>
                                    <div onClick={() => setModal(false)} className="cursor-pointer">
                                        <LucideCircleX />
                                    </div>
                                </div>
                                <hr />
                                <div className="p-5 flex flex-col gap-5 md:grid md:grid-cols-2">
                                    <div className="flex flex-col gap-5">
                                        <h1>Nome</h1>
                                        <input type="text" placeholder="Nome da Turma" className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                    </div>


                                    <div className="flex flex-col gap-5">
                                        <h1>Faixa Etária</h1>
                                        <select className="text-slate-800 p-2 rounded outline-0 bg-white w-full">
                                            <option>Selecione uma Faixa Etária</option>
                                            <option>Infantil</option>
                                            <option>Juvenil</option>
                                            <option>Adulto</option>
                                            <option>Idoso</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h1>Nome da Igreja</h1>
                                        <input disabled type="text" placeholder={dataChurch[0].name} value={dataChurch[0].name} className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h1>Congregação</h1>
                                        <select className="text-slate-800 p-2 rounded outline-0 bg-white w-full" >
                                            <option>Selecione a Congregação</option>
                                            {dataChurch.map((item: any) => (
                                                <option key={item.id}>{item.congregation}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <hr />
                                <div className="flex flex-col gap-5 p-5 md:justify-center md:items-center">
                                    <div className="flex w-full md:w-md p-5 items-center justify-center bg-violet-700 hover:bg-violet-500 rounded-2xl cursor-pointer transition-all duration-300 ease-linear">
                                        <h1 >Cadastrar Aluno</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))

                }

            </div>
        </section>
    )
}