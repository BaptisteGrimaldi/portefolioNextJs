import { MongoClient, ServerApiVersion } from 'mongodb';


const uri = process.env.MONGODB_URI?.toString() ?? '';

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    },
});
export async function checkDbConnection() {
  try {
        const dbName = 'Lead';
        await client.connect();
        await client.db(dbName).command({ ping: 1 });
        console.log('Connected successfully to server');
        const databasesList = await client.db().admin().listDatabases();
        if (databasesList.databases.map((db) => db.name).includes(dbName)) {
            console.log(`La base de données ${dbName} existe.`);
        } else {
            console.log(`La base de données ${dbName} n'existe pas.`);
        }
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

