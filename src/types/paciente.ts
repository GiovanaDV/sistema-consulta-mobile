export type Paciente = { //TypeScript garante que nenhum paciente seja criado sem os campos obrigatórios
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone?: string;
};