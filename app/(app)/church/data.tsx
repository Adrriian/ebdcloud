'use client'

import { db } from "@/services/firebase.config"
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"


export default async function getdataChurch(id:any) {

    const q = collection(db, 'church')
    const data = query(q, where('igrejaid', '==', id))
    const dados = await getDocs(data)


    const result = dados.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return result
}

/**
                     {dataChurchAdmin.map((item: any) => (
                        <div key={item.id} className="mb-5 p-2 bg-slate-300 rounded-xl">
                            <h1>Igreja:{item.name}</h1>
                            <h1>Cidade:
                            </h1>
                            <h1>Gongregação</h1>
                        </div>
                    ))}
                         {dataChurch.map((item: any) => (
                        <div key={item.id} className="mb-5 p-2 bg-slate-300 rounded-xl">
                            <h1>Igreja:{item.name}</h1>
                            <h1>Cidade:
                            </h1>
                            <h1>Gongregação</h1>
                        </div>
                    ))} */