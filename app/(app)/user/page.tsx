export default function UsertApp(){
    return(
        <section id="alunos" className=" p-2 dark:text-white">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="font-bold text-2xl">Turmas</h1>
                                    <h1 className="text-gray-500 text-[10px] md:text-xl lg:text-2xl  w-40 smalxl:w-full">
                                        Gerencie os alunos/turma da Escola Bíblica Dominical</h1>
                                </div>
                                <div id="newStudent"
                                    className="hidden p-2 gap-1 items-center rounded-2xl bg-indigo-700 cursor-pointer smalxl:w-fit hover:bg-indigo-500 transition-all duration-300 ease-linear">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        className="size-4 smalxl:size-5 md:size-6 stroke-white">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <h1 className="text-white text-[12px] font-bold smalxl:text-sm md:text-base ">Nova
                                        Turma
                                    </h1>
                                </div>
                            </div>
                            <div className="bg-slate-800 rounded-xl ">
                                <div id="renderClass" className="p-2 ">

                                </div>
                            </div>
                        </div>
                    </section>
    )
}