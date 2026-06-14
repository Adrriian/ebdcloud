import { LucideBellRing, LucideChessQueen, LucideChurch, LucideClipboard, LucideGraduationCap, LucideSchool2, LucideUserRound } from "lucide-react";

export const menus = [
    {
        name: "Aulas", icon: <LucideSchool2 />, role: ['admin', 'coordenador', 'alunos', 'pastorpresidente', 'pastorlocal', 'lider','musico','auxiliar','secretaria'], router: '/classrom'
    },
    {
        name: "Alunos", icon: <LucideGraduationCap />, role: ['admin', 'coordenador', 'alunos', 'pastorpresidente', 'pastorlocal', 'lider','musico','auxiliar','secretaria'], router: '/student'
    },
    {
        name: "Diretoria", icon: <LucideChessQueen />, role: ['admin', 'coordenador', 'alunos', 'pastorpresidente', 'pastorlocal', 'lider','musico','auxiliar','secretaria'], router: '/board'
    },
    {
        name: "Chamadas", icon: <LucideBellRing />, role: ['admin','coordenador', 'pastorpresidente', 'pastorlocal', 'lider', 'secretaria'], router: '/calls'
    },
    {
        name: "Pedidos", icon: <LucideClipboard />, role: ['admin', 'coordenador', 'alunos', 'pastorpresidente', 'pastorlocal', 'lider','musico','auxiliar','secretaria'], router: '/book'
    },
    {
        name: "Cadastrar Nova Igreja", icon: <LucideChurch />, role: ['admin','coordenador',], router: '/church'
    },
    {
        name: "Perfil", icon: <LucideUserRound />, role: ['admin', 'coordenador', 'alunos', 'pastorpresidente', 'pastorlocal', 'lider','musico','auxiliar','secretaria'], router: '/user'

    },
]