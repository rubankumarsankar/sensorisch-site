

import mysql from "mysql2/promise";

let pool;
export function getPool() {
  if (!pool) {
    const url = new URL(process.env.DATABASE_URL);
    pool = mysql.createPool({
      host: url.hostname,
      port: url.port || 3306,
      user: url.username,
      password: url.password,
      database: url.pathname.replace(/^\//, ""),
      connectionLimit: 5,
      charset: "utf8mb4",
    });
  }
  return pool;
}
