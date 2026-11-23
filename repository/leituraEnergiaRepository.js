import conexao from "../config/conexao.js";

export async function cadastrar(leitura) {
  const sql = `
    INSERT INTO leituras_energia
    (maquina_id, data_leitura, consumo_kwh, horas_operacao)
    VALUES (?, ?, ?, ?)
  `;

  const [resultado] = await conexao.execute(sql, [
    leitura.maquinaId,
    leitura.dataLeitura,
    leitura.consumoKwh,
    leitura.horasOperacao
  ]);

  return resultado.insertId;
}

export async function listar() {
  const sql = `
    SELECT * FROM leituras_energia
  `;

  const [leituras] = await conexao.execute(sql);
  return leituras;
}

export async function listarDetalhadas() {
}

export async function buscarPorId(id) {
  const sql = `
    SELECT * FROM leituras_energia
    WHERE id = ?
  `;

  const [leituras] = await conexao.execute(sql, [id]);
  return leituras[0];
}

export async function atualizar(id, leitura) {
  const sql = `
    UPDATE leituras_energia
    SET maquina_id = ?,
        data_leitura = ?,
        consumo_kwh = ?,
        horas_operacao = ?
    WHERE id = ?
  `;

  const [resultado] = await conexao.execute(sql, [
    leitura.maquinaId,
    leitura.dataLeitura,
    leitura.consumoKwh,
    leitura.horasOperacao,
    id
  ]);

  return resultado.affectedRows;
}

export async function deletar(id) {
  const sql = "DELETE FROM leituras_energia WHERE id = ?";
  const [resultado] = await conexao.execute(sql, [id]);
  return resultado.affectedRows;
}
