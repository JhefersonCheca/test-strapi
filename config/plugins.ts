export default ({ env }) => ({
    email: {
        config: {
          provider: 'amazon-ses',
          providerOptions: {
            key: env('AWS_SES_KEY'),
            secret: env('AWS_SES_SECRET'),
            amazon: `https://email.${env('AWS_SES_REGION', 'us-east-1')}.amazonaws.com`,
          },
          settings: {
            defaultFrom: env('AWS_SES_EMAIL'),
            defaultReplyTo: env('AWS_SES_EMAIL'),
          },
        },
      },
});
