'use client'

import { useEffect, useState } from "react"
import { CitiesType, getCitiesData } from "../datas/cities"

type ComponentCitiesProps = {
    cityId: string,
    setCityValue: React.Dispatch<React.SetStateAction<string>>
}

export default function ComponentCities({ cityId, setCityValue }: ComponentCitiesProps) {
    const [cities, setCities] = useState<CitiesType[]>([])

    useEffect(() => {
        async function getCities() {
            try {
                const dataCities = await getCitiesData(cityId)
                setCities(dataCities)
            } catch (error) {
                console.log(error)
            }
        }

        if (cityId) {
            getCities()
        }
    }, [cityId])

    return (
        <select  onChange={(e) => setCityValue(e.target.value)} className="text-slate-800 p-2 rounded outline-0 bg-white w-full">
            <option value="">Selecione uma Cidade</option>

            {cities.map((item) => (
                <option
                    key={item.id}
                    value={item.nome}
                >
                    {item.nome}
                </option>
            ))}
        </select>
    )
}