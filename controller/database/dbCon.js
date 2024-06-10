let { MongoClient } = require('mongodb');


const database = "Mart";
// const url = "mongodb://127.0.0.1";
// const url = "mongodb+srv://sag197348:L8xOovWEuXILMr1b@mart.ghurxon.mongodb.net/";
const password = "L8xOovWEuXILMr1b";
const url = `mongodb+srv://sag197348:${password}@mart.ghurxon.mongodb.net/?retryWrites=true&w=majority&appName=Mart`

const client = new MongoClient(url);

module.exports.dbConnection = async () => {
    try {
        const client = new MongoClient(url);
        let result = await client.connect();
        let db = await result.db(database);
        return db;
    } catch (e) {
        return e;
    }
}

module.exports.close = () => {
    try {
        client.close();
        return "db close";
    } catch (e) {
        return e;
    }
}