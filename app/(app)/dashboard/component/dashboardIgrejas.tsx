type Props = {
    nameChurch: string
    city: string
    status: boolean
    
}

export default function ShowChurch(props: Props) {
    return (
        <div  className="flex flex-col md:flex-row md:justify-between md:items-center bg-white rounded-xl p-2">
            <div>
                <div className="flex gap-2">
                    <h1 className="text-slate-800 font-bold" >Nome:</h1>
                    <h1 className="text-slate-800 " >{props.nameChurch}</h1>
                </div>
                 <div className="flex gap-2">
                    <h1 className="text-slate-800 font-bold" >Cidade:</h1>
                    <h1 className="text-slate-800 ">{props.city}</h1>
                </div>

            </div>
            <div>
                <div className="flex gap-2">
                    <h1 className="text-slate-800 font-bold" >Status:</h1>
                    <h1 className="text-slate-800">{props.status === false ? "Inativo" : "Ativo"}</h1>
                </div>
            </div>
        </div>
    )
}