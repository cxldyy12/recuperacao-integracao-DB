import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    user: process.env.DB_USER,
    passw: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    port: process.env.PORT,
})
export default conexao;