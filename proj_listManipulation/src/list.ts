export const ListTask: latitude[] = [
    { id: Math.random(), task: "Criação da Tela Login", done: false },
    { id: Math.random(), task: "Criação da Tela Register", done: true },
    { id: Math.random(), task: "Lavar o carro", done: false },
    { id: Math.random(), task: "Arrumar a cama", done: false },
    { id: Math.random(), task: "Formatar o computador", done: false },
    { id: Math.random(), task: "Escrever Redação", done: false },
    { id: Math.random(), task: "Fazer antiProjeto", done: true },
    { id: Math.random(), task: "estudar para prova", done: false },
    { id: Math.random(), task: "estudar React", done: false },
    { id: Math.random(), task: "Ver metodologia Scrum", done: true },
    { id: Math.random(), task: "Estudar React Native", done: false },
];



export type latitude = {
    id: number;
    task: string;
    done: boolean;
}