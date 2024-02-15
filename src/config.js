// config.js
require('dotenv').config()

const sessionFolderPath = process.env.SESSIONS_PATH
const enableLocalCallbackExample = process.env.ENABLE_LOCAL_CALLBACK_EXAMPLE === 'true'
const globalApiKey = process.env.GLOBAL_API_KEY || 'smartcode.com.br';
const baseWebhookURL = process.env.BASE_WEBHOOK_URL || 'http://example.com/webhook'
const maxAttachmentSize = parseInt(process.env.MAX_ATTACHMENT_SIZE) || 10000000
const setMessagesAsSeen = process.env.SET_MESSAGES_AS_SEEN === 'true'
const disabledCallbacks = process.env.DISABLED_CALLBACKS ? process.env.DISABLED_CALLBACKS.split('|') : []
const enableSwaggerEndpoint = process.env.ENABLE_SWAGGER_ENDPOINT === 'true'
const webVersion = process.env.WEB_VERSION
const webVersionCacheType = process.env.WEB_VERSION_CACHE_TYPE || 'none'
const rateLimitMax = process.env.RATE_LIMIT_MAX || 1000
const rateLimitWindowMs = process.env.RATE_LIMIT_WINDOW_MS || 1000
const recoverSessions = process.env.RECOVER_SESSIONS === 'true'

module.exports = {
    sessionFolderPath,
    enableLocalCallbackExample,
    globalApiKey,
    baseWebhookURL,
    maxAttachmentSize,
    setMessagesAsSeen,
    disabledCallbacks,
    enableSwaggerEndpoint,
    webVersion,
    webVersionCacheType,
    rateLimitMax,
    rateLimitWindowMs,
    recoverSessions
}
