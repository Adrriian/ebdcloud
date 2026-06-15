'use client'
import { db } from "@/services/firebase.config";
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";

export type dataUser = {
    birthday: string,
    church: string,
    congregation: string,
    email: string,
    name: string,
    phone: string,
    role: string,
    status: boolean,
    uid: string,
    id:string
    igrejaid:string
}
export async function getDados(uid: string) {
    const q = doc(db, 'users', uid)
    const userData = await getDoc(q)

    if (!userData.exists()) {
        return null;
    }

    return {
        id: userData.id,
        ...(userData.data() as Omit<dataUser, "id">)
    };
}