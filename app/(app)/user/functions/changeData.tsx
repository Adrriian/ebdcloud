import { db } from "@/services/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
type changeUser ={
    uid:string,
    name:string,
    phone:string
}
export async function updateData(props:changeUser){
    try{
        const q = doc(db,'users', props.uid)
        await updateDoc(q,{
            name:props.name,
            phone:props.phone
        })
        alert('deu boa')
        console.log("Dados atualizados com sucesso!");
    }catch(error){
        console.log(error);
    }
}