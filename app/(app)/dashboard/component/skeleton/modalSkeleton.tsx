'use client'
export default function ModalSkeleton() {
    return (
        <div className="bg-slate-800 rounded-xl animate-pulse">

                

                <hr className="border-slate-700" />

                {/* Dados da Igreja */}
                <div className="p-5 flex flex-col gap-5 md:grid md:grid-cols-2">

                    {[...Array(7)].map((_, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <div className="bg-slate-700 h-4 w-24 rounded"></div>
                            <div className="bg-slate-700 h-10 w-full rounded"></div>
                        </div>
                    ))}

                </div>

                {/* Líder */}
                <div className="flex justify-between items-center pl-5">
                    <div className="bg-slate-700 h-6 w-20 rounded"></div>
                </div>

                <div className="flex flex-col gap-5 p-5 md:grid md:grid-cols-2">

                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <div className="bg-slate-700 h-4 w-24 rounded"></div>
                            <div className="bg-slate-700 h-10 w-full rounded"></div>
                        </div>
                    ))}

                </div>

                <hr className="border-slate-700" />

                {/* Botão */}
                <div className="flex flex-col gap-5 p-5 md:justify-center md:items-center">
                    <div className="bg-slate-700 h-14 w-full md:w-md rounded-2xl"></div>
                </div>

            </div>
        )
}