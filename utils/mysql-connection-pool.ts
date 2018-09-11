import * as mysql from "mysql";

export class MySqlConnectionPool {
    connectionPool: mysql.Pool;

    constructor() {
        this.connectionPool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'my_db'
        });
    }

    public getConnection(callback: (err: any, connection: any) => Promise<boolean>) {
        this.connectionPool.getConnection(async (err: any, connection: any) => {
            if (err) {
                throw "Error in connetion pool"
            }

            await callback(err, connection);
            connection.realease();
        });
    }
}