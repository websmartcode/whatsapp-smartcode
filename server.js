require('dotenv').config(); // Make sure this line is at the top

if (!process.env.BASE_WEBHOOK_URL) {
    console.error('BASE_WEBHOOK_URL environment variable is not available. Exiting...');
    process.exit(1);
}

const app = require('./src/app');
const { baseWebhookURL } = require('./src/config');

// Start the server
const port = process.env.PORT || 3000;

// Check if BASE_WEBHOOK_URL environment variable is available
if (!baseWebhookURL) {
    console.error('BASE_WEBHOOK_URL environment variable is not available. Exiting...');
    process.exit(1); // Terminate the application with an error code
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
