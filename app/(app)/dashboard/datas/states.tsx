'use client'

import { useState } from "react";


export type StateType ={
    id:number,
    nome:string,
    sigla:string,
   
}
export async function getStatesData():Promise<StateType[]> {
    try {
        const response = await fetch(
            'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
        );

        if (!response.ok) {
            throw new Error('Erro ao buscar estados');
        }

        const states: StateType[] = await response.json();

        return states.sort((a, b) => a.nome.localeCompare(b.nome));
    } catch (error) {
        console.error(error);
        return [];
    }
}

