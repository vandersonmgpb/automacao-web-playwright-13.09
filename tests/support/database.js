const { Pool } = require('pg')

const DbConfig = {
    user: 'postgres',
    host: 'pgdb', //ou https://082d3f7d464a40ac8a9d0b1be0bbb54a@o4505329693753344.ingest.sentry.io/4505329695391744 
    database: 'postgres',
    password: 'pwd123',
    port: 5432
}

export async function executeSQL(sqlScript) {

    try {
        const pool = new Pool(DbConfig)
        const client = await pool.connect()

        const result = client.query(sqlScript)
        console.log(result.rows)
    } catch (error) {
        console.log('Erro ao executar SQL ' + error)
    }
}