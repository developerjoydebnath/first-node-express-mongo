const express = require('express');
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//username: joydebnathjp
//password: M9YGi7TPkKgE8drF


const uri = "mongodb+srv://joydebnathjp:M9YGi7TPkKgE8drF@cluster0.ppboh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
  try{
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");
    const user = {name: 'joy', email: 'joy@gmail.com'};
    const result = await userCollection.insertOne(user);
    console.log(result.insertedId)
  }
  catch{
    // await client.close();
  }
}

run().catch(console.dir)

app.get("/", (req, res) => {
  res.send('my first node crud server is running');
});

app.listen(port, () => {
  console.log('listening to server', port);
});