'use client'

import { useState } from "react";


export type CitiesType ={
     id: number;
    nome: string;
}
export async function getCitiesData(id: string): Promise<CitiesType[]> {
    try {
        const response = await fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
        );

        if (!response.ok) {
            throw new Error('Erro ao buscar cidades');
        }

        const cities: CitiesType[] = await response.json();

        return cities.sort((a, b) => a.nome.localeCompare(b.nome));
    } catch (error) {
        console.error(error);
        return [];
    }
}
