'use client'
import { LoaderCircle, LucideCircleX, LucidePlus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { getChurch } from "../student/data";
import { RoleContext } from "@/services/contexts/roleContext";
import { IgrejaId } from "@/services/contexts/igrejaIDContext";

import getAdminUser, { dataChurch } from "./datas/dataChurch";
import ComponentStates from "./component/states";
import ComponentCities from "./component/cities";
import ShowChurch from "./component/dashboardIgrejas";
import ModalSkeletons from "./component/skeleton/modalSkeleton";
import ModalSkeleton from "./component/skeleton/modalSkeleton";
import ChurchCardSkeleton from "./component/skeleton/showIgrejas";
import { registerChurch } from "./functions/registerChurch";

export default function ChurchtApp() {

    //contexts
    const role = useContext(RoleContext)
    const id = useContext(IgrejaId)

    //state de dados
    const [stateId, setStateId] = useState('')
    const [statusmodal, setStatusModal] = useState(false)
    const [dataChurch, setDataChurch] = useState<dataChurch[]>([])

    //states de salvar dados no firestore
    const [nameChurch, setNameChurch] = useState('')
    const [nameCongregacao, setNameCongregacao] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [bairro, setBairro] = useState('')
    const [liderName, setLiderName] = useState('')
    const [liderEmail, setLiderEmail] = useState('')
    const [liderDate, setLiderDate] = useState('')
    const [liderCargo, setLiderCargo] = useState('')
    const [cidade, setCidade] = useState('')
    const [liderPhone, setLiderPhone] = useState('')

    const [data, setData] = useState({
        value: "",
        id: ""
    });

    //states de carregamento
    const [carregar, setCarregar] = useState(true)
    const [showIgrejaSkeleton, setShowIgrejaSkeleton] = useState(true)
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        async function renderClass() {
            try {
                const data = await getAdminUser()
                setDataChurch(data)

            } catch (error) {
                console.log(error)
            } finally {
                setShowIgrejaSkeleton(false)
                setCarregar(false)
            }

        }
        renderClass()
    }, [])

    console.log(dataChurch);

    return (
        <section id="alunos" className=" p-2 dark:text-white">
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-[60%_40%] sm:grid-cols-[80%_20%] md:grid-cols-[80%_20%] lg:grid-cols-[80%_20%] xl:grid-cols-[90%_10%]">
                    <div>
                        <h1 className="font-bold text-2xl">Dashboard</h1>
                        <h1 className="text-gray-500 text-[10px] md:text-xl lg:text-2xl ">
                            Dashboard das Igrejas Cadastradas</h1>
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
                            <div className="bg-slate-800  w-4/5 h-4/5 overflow-y-scroll rounded-xl ">
                                <div className="flex justify-between items-center p-5">
                                    <h1>Nova Turma</h1>
                                    <div onClick={() => setStatusModal(false)} className="cursor-pointer">
                                        <LucideCircleX />
                                    </div>

                                </div>
                                <ModalSkeleton />
                            </div>
                        </div>
                    )
                        : (
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
                                            <h1>Igreja</h1>
                                            <input type="text" placeholder="Nome da Igreja" value={nameChurch} onChange={(e) => setNameChurch(e.target.value)} className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Congregação</h1>
                                            <input type="text" placeholder="Digite a sua Congreagação" value={nameCongregacao} onChange={(e) => setNameCongregacao(e.target.value)} className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Estado</h1>
                                            <ComponentStates
                                                stateData={data}
                                                setStateData={setData}

                                            />
                                        </div>

                                        <div className="flex flex-col gap-5">
                                            <h1>Cidade</h1>
                                            <ComponentCities
                                                cityId={data.id}
                                                setCityValue={setCidade}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Rua</h1>
                                            <input type="text" placeholder="Rua da Igreja" value={street} onChange={(e) => setStreet(e.target.value)} className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Numero</h1>
                                            <input type="text" placeholder="Número da Igreja" value={number} onChange={(e) => setNumber(e.target.value)} className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Bairro</h1>
                                            <input type="text" placeholder="Bairro da Igreja" value={bairro} onChange={(e) => setBairro(e.target.value)} className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>


                                    </div>

                                    <div className="flex justify-between items-center pl-5">
                                        <h1>Líder</h1>
                                    </div>
                                    <div className="flex flex-col gap-5 p-5  md:grid md:grid-cols-2">

                                        <div className="flex flex-col gap-5">
                                            <h1>Nome</h1>
                                            <input type="text" placeholder="Nome do Líder" value={liderName} onChange={(e) => setLiderName(e.target.value)} className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Email</h1>
                                            <input type="text" placeholder="Nome da Igreja" value={liderEmail} onChange={(e) => setLiderEmail(e.target.value)} className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Telefone</h1>
                                            <input type="number" placeholder="Nome da Igreja" value={liderPhone} onChange={(e) => setLiderPhone(e.target.value)} className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Data de Aniversário</h1>
                                            <input type="text" placeholder="Nome da Igreja" value={liderDate} onChange={(e) => setLiderDate(e.target.value)} className="text-slate-800 p-2 rounded outline-0 bg-white w-full" />
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <h1>Cargo:</h1>
                                            <select value={liderCargo} onChange={(e) => setLiderCargo(e.target.value)} className="text-slate-800 p-2 rounded outline-0 bg-white w-full" >
                                                <option>Selecione uma Cidade</option>
                                                <option>Pastor Presidente</option>
                                                <option>Pastor Local</option>
                                                <option>Cordenador</option>
                                            </select>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex flex-col gap-5 p-5 md:justify-center md:items-center">
                                        <div onClick={async () => {
                                            try {
                                                setLoading(true)
                                                registerChurch({ state: data.value, liderPhone, cidade, nameChurch, nameCongregacao, street, number, bairro, liderName, liderEmail, liderDate, liderCargo })

                                            } catch (error) {
                                                console.log(error)
                                            } finally { setLoading(false) }
                                        }}
                                            className="flex w-full md:w-md p-5 items-center justify-center bg-violet-700 hover:bg-violet-500 rounded-2xl cursor-pointer transition-all duration-300 ease-linear">
                                            <h1 >Cadastrar Igreja</h1>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}



                {loading === true && (
                    <div className="fixed inset-0 bg-black/80 z-999 flex flex-col items-center justify-center">
                        <LoaderCircle
                            className="animate-spin"
                            size={50}
                        />
                        <h1 className="text-white text-lg">
                            Cadastrando igreja...
                        </h1>
                    </div>
                )}
                <div className="bg-slate-800 rounded-xl p-5 flex flex-col gap-5">

                    {(showIgrejaSkeleton === true ? (
                        <ChurchCardSkeleton />
                    ) :
                        (
                            dataChurch.map((item) => (
                                <div>
                                    <ShowChurch key={item.id} nameChurch={item.nameChurch} city={item.city} status={item.status} />
                                </div>
                            ))
                        )
                    )}
                </div>

            </div>
        </section>
    )

}