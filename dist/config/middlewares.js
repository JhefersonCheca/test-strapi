"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:', 'http:'],
                    'img-src': [
                        "'self'",
                        'data:',
                        'blob:',
                        'https://market-assets.strapi.io',
                        'https://test-s3-jhefer.s3.us-east-2.amazonaws.com',
                    ],
                    'media-src': [
                        "'self'",
                        'data:',
                        'blob:',
                        'https://test-s3-jhefer.s3.us-east-2.amazonaws.com',
                    ],
                },
            },
        },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
