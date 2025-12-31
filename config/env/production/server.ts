export default ({ env }: { env: any }) => ({
  proxy: true,
  url: env('APP_URL'), // thay thế host & port
  app: {
    keys: env.array('APP_KEYS'),
  },
});
