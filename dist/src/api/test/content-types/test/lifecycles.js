"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async afterCreate(event) {
        const { result } = event;
        const { correo, nombre, texto } = result;
        try {
            await strapi.plugins['email'].services.email.send({
                to: correo,
                from: 'noreply@correo.agricapital.com.co',
                subject: `${nombre} - Correo para testear el servicio`,
                text: texto || 'Texto por defecto',
            });
        }
        catch (error) {
            console.error("Error al enviar correo:", error);
        }
    }
};
