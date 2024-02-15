require('dotenv').config(); // Certifique-se de que esta linha est� no topo

// Verifique se BASE_WEBHOOK_URL est� definida
if (!process.env.BASE_WEBHOOK_URL) {
    console.error('BASE_WEBHOOK_URL environment variable is not available. Exiting...');
    process.exit(1);
}

const app = require('./src/app');
const { baseWebhookURL } = require('./src/config');

// Verifique se a vari�vel baseWebhookURL est� definida
if (!baseWebhookURL) {
    console.error('BASE_WEBHOOK_URL from config is not available. Exiting...');
    process.exit(1); // Encerre o aplicativo com um c�digo de erro
}

// Inicie o servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
