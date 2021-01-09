module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '255600695ea0c85edb14b49825d3d5f0'),
    },
  },
});
