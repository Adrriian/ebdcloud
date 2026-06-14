'use client'

import { useEffect, useState } from "react"
import { CitiesType, getCitiesData } from "../datas/cities"

type ComponentCitiesProps = {
    stateId: string
}

export default function ComponentCities({ stateId }: ComponentCitiesProps) {
    const [cities, setCities] = useState<CitiesType[]>([])

    useEffect(() => {
        async function getCities() {
            try {
                const dataCities = await getCitiesData(stateId)
                setCities(dataCities)
            } catch (error) {
                console.log(error)
            }
        }

        if (stateId) {
            getCities()
        }
    }, [stateId])

    return (
        <select className="text-slate-800 p-2 rounded outline-0 bg-white w-full">
            <option value="">Selecione uma Cidade</option>

            {cities.map((item) => (
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