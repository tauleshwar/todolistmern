const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI


const client = new MongoClient(uri)

let db;

async function connectDB() {
    try {

        await client.connect()

        console.log('Connected to MongoDB')
        db = client.db(process.env.DB_NAME)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
    }
}


function getDB() {
    if (!db) throw new Error("DB not initialized");
    return db;
}

module.exports = {
    getDB,
    connectDB
}