import conexao from "../config/conexao.js";

export async function cadastrar(maquina) {
  const sql = `
    INSERT INTO maquinas (codigo, nome, setor, status)
    VALUES (?, ?, ?, ?)
  `;

  const [resultado] = await conexao.execute(sql, [
    maquina.codigo,
    maquina.nome,
    maquina.setor,
    maquina.status
  ]);

  return resultado.insertId;
}

export async function listar() {
  const sql = `
    SELECT * FROM maquinas
  `;

  const [maquinas] = await conexao.execute(sql);
  return maquinas;
}

export async function buscarPorId(id) {
  const sql = `
    SELECT * FROM maquinas
    WHERE id = ?
  `;

  const [maquinas] = await conexao.execute(sql, [id]);
  return maquinas[0] || null;
}

export async function atualizar(id, maquina) {
  const sql = `
    UPDATE maquinas
    SET codigo = ?, nome = ?, setor = ?, status = ?
    WHERE id = ?
  `;

  const [resultado] = await conexao.execute(sql, [
    maquina.codigo,
    maquina.nome,
    maquina.setor,
    maquina.status,
    id
  ]);

  return resultado.affectedRows;
}

export async function deletar(id) {
  const sql = "DELETE FROM maquinas WHERE id = ?";
  const [resultado] = await conexao.execute(sql, [id]);
  return resultado.affectedRows;
}
