'use client'

import { useEffect, useState } from "react"
import { getStatesData, StateType } from "../datas/states"

type ComponentStatesProps = {
    stateId: string
    setStateId: React.Dispatch<React.SetStateAction<string>>
}

export default function ComponentStates({
    stateId,
    setStateId
}: ComponentStatesProps) {

    const [states, setStates] = useState<StateType[]>([])

    useEffect(() => {
        async function getStates() {
            const dataStates = await getStatesData()
            setStates(dataStates)
        }

        getStates()
    }, [])

    return (
        <select
            value={stateId}
            onChange={(e) => setStateId(e.target.value)}
            className="text-slate-800 p-2 rounded outline-0 bg-white w-full"
        >
            <option value="">Selecione um Estado</option>

            {states.map((item) => (
                <option
                    key={item.id}
                    value={item.id}
                >
                    {item.nome}
                </option>
            ))}
        </select>
    )
}