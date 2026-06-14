'use client'

import { db } from "@/services/firebase.config"
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"

export default async function getAdminUser() {

    const q = collection(db, "church");

    const dados = await getDocs(q);

    const churchs = dados.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    return churchs;
}