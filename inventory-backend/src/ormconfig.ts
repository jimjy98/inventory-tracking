import { join } from 'path'
import { ConnectionOptions } from 'typeorm'
import { Item } from './items/item.entity';

const config = {
    host: 'localhost',
    user: 'jimmy',
    password: 'password',
    database: 'db_inventory-main',
}

const connectionOptions: ConnectionOptions = {
    type: 'postgres',
    host: config.host,
    port: 5432,
    username: config.user,
    password: config.password,
    database: config.database,
    entities: [
        Item
    ],
    // We are using migrations, synchronize should be set to false.
    synchronize: false,
    dropSchema: false,
    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: true,
    migrations: [
        join(__dirname, 'migrations/*{.ts,.js}')
    ],
    cli: {
        migrationsDir: 'src/migrations'
    }
}

export = connectionOptions