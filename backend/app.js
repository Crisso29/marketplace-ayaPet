
import express from 'express';

const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a ayaPet API :)',
        status: 'Servidor funcionando correctamente'
    });
});

export default app;
