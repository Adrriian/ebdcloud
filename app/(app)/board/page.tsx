'use client'
export default function BoardApp() {
    return (
        <div className="p-2 bg-white dark:text-white ">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="font-bold text-2xl">Diretoria</h1>
                        <h1 className="text-gray-500 text-[10px] md:text-xl lg:text-2xl  w-40 smalxl:w-full">
                            Membros
                            da diretoria da EBD</h1>
                    </div>
                    <div id="newBoard"
                        className="hidden p-2 gap-1 items-center rounded-2xl bg-indigo-700 cursor-pointer smalxl:w-fit hover:bg-indigo-500 transition-all duration-300 ease-linear">

                        <h1 className="text-white text-[12px] font-bold smalxl:text-sm md:text-base">NovoMembro
                        </h1>
                    </div>
                </div>
                <div className="bg-slate-800 rounded-xl">
                    <div className="p-5">
                        <div>
                            <h1 className="text-white">MEMBROS DA DIRETORIA</h1>
                        </div>
                    </div>
                    <hr className="text-white" />
                    <div id="renderBoards"
                        className="p-5 max-h-100 overflow-y-scroll scrollbar scrollbar-thumb-slate-800">

                    </div>
                </div>
            </div>
        </div>
        
    )
}