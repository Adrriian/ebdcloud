'use client'

import { db } from "@/services/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";


export async function getChurch(id:any){
  
    const q = collection(db, 'church')
    const data = query(q, where("igrejaid", "==", id))
    const church = await getDocs(data)

    const result = church.docs.map(doc =>({
        id: doc.id,
        ...doc.data()
    }))
    return result
}