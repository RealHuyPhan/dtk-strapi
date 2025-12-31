import { parse } from 'pg-connection-string';

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL as string
);

export default ({ env }: { env: (key: string) => string | undefined }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host,
      port: port ? Number(port) : undefined,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
