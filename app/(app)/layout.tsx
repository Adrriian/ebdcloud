'use client'
import { ReactNode, useEffect, useState } from 'react';
import '../globals.css'
import { LucideBellRing, LucideChessKing, LucideChessQueen, LucideChurch, LucideCircleX, LucideClipboard, LucideGraduationCap, LucideKeyboard, LucideMenu, LucideMenuSquare, LucideMoonStar, LucideSchool, LucideSchool2, LucideUserRound, LucideXCircle, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
type typeReactNode = {
    children: ReactNode;
}
import { menus } from './data'
export default function RootLayoutApp({ children }: typeReactNode) {
    const [width, setWidth] = useState('w-0')
    const openSidebar = () => {
        setWidth('w-75')
    }
    const closeSidebar = () => {
        setWidth('w-0')
    }
    const Router = useRouter()
    const [itemAtivo, setItemAtivo] = useState(0)
   
    const role = 'admin'
    return (
        <div className="flex">
            <aside>
                <div id="sidebar" className={`${width} flex flex-col justify-baseline min-h-screen  gap-2 bg-slate-800 dark:bg-black overflow-hidden  z-10 absolute  transition-all duration-300 ease-linear lg:z-0 lg:static lg:w-75`}>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between p-2 items-center  dark:text-white m-2 w-70">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-white  font-bold text-2xl">EBD Cloud</h1>
                                <h1 className="font-light text-gray-400 ">Escola Bíblica Dominical</h1>
                            </div>
                            <div onClick={closeSidebar} className="cursor-pointer lg:hidden">
                                <LucideCircleX className="dark:text-white text-slate-800" />
                            </div>

                        </div>
                        <hr className="text-white/50" />
                        <div className=" w-full p-2 ">
                            <nav className="flex flex-col gap-5">
                                {menus.filter(menus => menus.role.includes(role)).map((menu, index) => {
                                    const Icon = menu.icon
                                    const router = menu.router
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => {setItemAtivo(index); Router.push(router)}}
                                            className={`flex gap-2 items-center hover:bg-violet-500 rounded-2xl p-3  cursor-pointer transition-all duration-150 ease-linear
                                                ${itemAtivo === index
                                                    ? 'bg-violet-500 text-white'
                                                    : 'bg-violet-800 text-white'
                                                }`}>
                                            {Icon}
                                            <h1 className="text-white font-bold">{menu.name}</h1>
                                        </button>
                                    )
                                })}
                                
                            </nav>

                        </div>
                    </div>



                    <div className=" flex flex-col gap-2">
                        <hr className="text-white/50" />
                        <div id="themaMode" className="flex m-2 gap-2 p-3 items-center bg-violet-800 hover:bg-violet-500 rounded-2xl cursor-pointer ">
                            <LucideMoonStar />
                            <h1 id="themaText" className="text-white">Modo Claro</h1>
                        </div>

                    </div>
                </div>
            </aside>
            <div className="w-full">
                <header className="flex p-3 gap-2 items-center bg-white dark:bg-slate-900 ">
                    <div onClick={openSidebar} className="p-1 rounded-2xl bg-white dark:bg-slate-900 cursor-pointer lg:hidden">
                        <Menu className="dark:text-white text-slate-800" />
                    </div>
                    <h1 className=" text-indigo-700 dark:text-indigo-400 font-bold text-2xl md:text-3xl">EBD Cloud</h1>
                </header>
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    )

}