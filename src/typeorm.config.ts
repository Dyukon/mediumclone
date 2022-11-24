import { DataSourceOptions } from 'typeorm'

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [
    __dirname + '/migrations/**/*{.ts,.js}'
  ],
}
export default config