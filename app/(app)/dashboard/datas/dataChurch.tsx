'use client'

import { db } from "@/services/firebase.config"
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"

export type dataChurch ={
    city:string
    id:string 
    nameChurch:string
    status:boolean
}

export default async function getAdminUser() {

    const q = collection(db, "church");

    const dados = await getDocs(q);

    const churchs:dataChurch[] = dados.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data()as Omit<dataChurch, "id">)
    }));

    return churchs;
}