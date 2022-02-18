module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0eda456b2023b5f295546024180abf7f'),
  },
});
