'use client'

import { useEffect, useState } from "react"
import { getStatesData, StateType } from "../datas/states"

type StateData = {
    value: string;
    id: string;
};


type ComponentStatesProps = {
    stateData: StateData;
    setStateData: React.Dispatch<React.SetStateAction<StateData>>;
    
};

export default function ComponentStates({stateData,setStateData}: ComponentStatesProps) {

    const [states, setStates] = useState<StateType[]>([]);

    useEffect(() => {
        async function getStates() {
            const dataStates = await getStatesData();
            setStates(dataStates);
        }

        getStates();
    }, []);

    const handleStateChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedOption = e.target.selectedOptions[0];

        setStateData({
            value: selectedOption.text, // nome do estado
            id: e.target.value          // id do estado
        });
        
    };

    return (
        <select
            value={stateData.id}
            onChange={handleStateChange}
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
    );
}


