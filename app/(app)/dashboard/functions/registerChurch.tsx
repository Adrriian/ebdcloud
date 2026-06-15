'use client'
import { auth, db } from "@/services/firebase.config"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { useState } from "react";

type Props = {
    nameChurch: string
    nameCongregacao: string
    street: string
    number: string
    bairro: string
    liderName: string
    liderEmail: string
    liderDate: string
    liderCargo: string
    state: string,
    cidade: string
    liderPhone: string
}


export async function registerChurch(props: Props) {


    if (props.liderPhone === '' || props.nameChurch === '' || props.nameCongregacao === '' || props.street === '' || props.number === '' || props.bairro === '' || props.liderName === '' || props.liderEmail === '' || props.liderDate === '' || props.liderCargo === '') {
        alert('Preencha todos os campos')
        return
    }
    const city = props.cidade
    const name = props.nameChurch
    const resultCity = city.replaceAll(" ", "");
    const resultName = name.replaceAll(" ", "");
    const id = resultName + resultCity
    const senha = 'V9#rT2!mQ7@xL4$k'
    try {

        await setDoc(doc(db, 'church', id), {
            street: props.street,
            number: props.number,
            bairro: props.bairro,
            nameChurch: props.nameChurch,
            nameCongregacao: props.nameCongregacao,
            liderName: props.liderName,
            liderEmail: props.liderEmail,
            liderDate: props.liderDate,
            liderCargo: props.liderCargo,
            state: props.state,
            city: props.cidade,
            status: true,
            id: id
        })
        await addDoc(collection(db, 'church', id, 'campo'), {
            street: props.street,
            number: props.number,
            bairro: props.bairro,
            nameChurch: props.nameChurch,
            nameCongregacao: props.nameCongregacao,
            liderName: props.liderName,
            liderEmail: props.liderEmail,
            liderDate: props.liderDate,
            liderCargo: props.liderCargo,
            state: props.state,
            city: props.cidade,
            status: true,
            id: id
        })
        const userCredential = await createUserWithEmailAndPassword(auth, props.liderEmail, senha)
        const uid = userCredential.user.uid

        await setDoc(doc(db, 'users', uid), {
            name: props.liderName,
            email: props.liderEmail,
            birthday: props.liderDate,
            igrejaid: id,
            role: props.liderCargo,
            status: true,
            congregation: props.nameCongregacao,
            church: props.nameChurch,
            uid: uid,
            phone: props.liderPhone,
            senha:senha
        })

        alert('Cadastro Concluido')
    } catch (error) {
        console.log(error)
        alert('Erro ao cadastrar')
    }
}