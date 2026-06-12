import { LucideBellRing, LucideChessQueen, LucideChurch, LucideClipboard, LucideGraduationCap, LucideSchool2, LucideUserRound } from "lucide-react";

export const menus = [
    {
        name: "Aulas", icon: <LucideSchool2 />, role: ['admin', 'user'], router: '/classrom'
    },
    {
        name: "Alunos", icon: <LucideGraduationCap />, role: ['admin', 'user'], router: '/student'
    },
    {
        name: "Diretoria", icon: <LucideChessQueen />, role: ['admin', 'user'], router: '/board'
    },
    {
        name: "Chamadas", icon: <LucideBellRing />, role: ['admin'], router: '/calls'
    },
    {
        name: "Pedidos", icon: <LucideClipboard />, role: ['admin'], router: '/book'
    },
    {
        name: "Cadastrar Nova Igreja", icon: <LucideChurch />, role: ['admin'], router: '/church'
    },
    {
        name: "Perfil", icon: <LucideUserRound />, role: ['admin', 'user'], router: '/user'

    },
]