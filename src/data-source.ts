
import { Log } from './entity/log';
import { DataSource } from "typeorm";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 8080,
    username: "test",
    password: "mysql",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [Log],
    subscribers: [],
    migrations: [],
})