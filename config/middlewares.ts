export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // tuỳ chỉnh nếu muốn
        },
      },
      crossOriginResourcePolicy: false,
      crossOriginEmbedderPolicy: false,
      crossOriginOpenerPolicy: false, // tắt strict-origin-when-cross-origin
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'], // hoặc ['http://localhost:3000'] cho dev
      headers: '*',
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];