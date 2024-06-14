import { Collection, Document, MongoClient } from 'mongodb';

const client = new MongoClient('URL DO BANCO');
let documents: Collection<Document> | null = null;

try {
    await client.connect();

    const db = client.db('NOME DO BANCO');
    documents = db.collection('NOME DA COLEÇÃO');
}
catch (error) { console.log(error); }

export default documents;