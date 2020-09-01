const MongoClient = require('mongodb').MongoClient;

const uri =
  'mongodb+srv://igtiuser:resuitgi@bootcamp-smurc.mongodb.net/<dbname>?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(async (err) => {
  //obter colecao student
  const collection = client.db('grades').collection('student');

  //busca documents cujo subject seja Historia
  const documents = await collection.find({ subject: 'Historia' }).toArray();

  //console.log(documents);

  //obter lista dos bancos no servidor conectado
  const databaselist = await client.db().admin().listDatabases();

  console.log('Databases:');

  databaselist.databases.forEach((db) => {
    console.log(` - ${db.name}`);
  });

  client.close();
});
