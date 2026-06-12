'use client'
import { db } from "@/services/firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getDados() {
    const q = collection(db, 'users')
    const data = query(q, where("uid", "==", 'YiqVq959EIhT6MQYz0aLijoq0dL2'))
    const userData = await getDocs(data)

   const usuarios = userData.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return usuarios;
}