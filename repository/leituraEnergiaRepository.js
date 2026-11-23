import conexao from "../config/conexao.js"

export async function cadastrar(leitura) {
    const sql = `
    insert into leituras_energia(maquina_id, data_leitura, consumo_kwh, horas_operacao, fk_leituras_maquinas);
    values(?, ?, ?, ?);
    `
}
    const [result] = conexao.execute(sql, [
        leitura.id, 
        leitura.codigo
    ]);

export async function listar() {
}

export async function listarDetalhadas() {
}

export async function buscarPorId(id) {
}

export async function atualizar(id, leitura) {
}

export async function deletar(id) {
}
