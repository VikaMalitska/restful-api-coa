import * as Mysql from 'mysql';
import { resolve } from 'url';

const connection = Mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwert12354",
    database: "myapp"
});  

export function query(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export default connection;
 





