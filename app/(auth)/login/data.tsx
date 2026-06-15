import { db } from "@/services/firebase.config";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import { useContext } from "react";


export async function getData(id: string) {


    const q = doc(db, "users", id);
    const datas = await getDoc(q)

    if (datas.exists()) {
        const values = datas.data();
        return values
    }
    return null
}