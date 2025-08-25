"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
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
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                s3Options: {
                    credentials: {
                        accessKeyId: env('AWS_ACCESS_KEY_ID'),
                        secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
                    },
                    region: env('AWS_REGION'),
                    params: {
                        ACL: 'private',
                        signedUrlExpires: 15 * 60,
                        Bucket: env('AWS_BUCKET'),
                    },
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
