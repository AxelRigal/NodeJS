const defaultMongoUrl = "mongodb://localhost/test";

module.exports = {
    mongoDbUrl: process.env.MONGO_DB_URL || defaultMongoUrl,
    port: process.env.PORT || 8084
};