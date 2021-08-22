const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');




async function insertDoc( db,email,callback){

    const collection = db.collection("MyCollection")

   async function myInsert(collection,email){

     return  await  collection.insertOne(
            {
                name: "Buddhadeb Karmakar",
                email: email

            })
    }


    async function countData() {
      count=  await collection.find({"email": email}).count()
       // console.log(count)
        return count
    }

  //  countData().then(count => {
    count =await  countData()
        if (count > 0) {
            console.log(count)
            console.log("Already Exists Email")
        } else {
          abc=      myInsert(collection,email)
            console.log(count)
            console.log("record inserted")

        }


   // })

}

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myTable';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
    //assert.equal(null, err);
    console.log("Connected successfully to test_server");

    const db = client.db(dbName);
    let email="kunal@gmail.com"
      insertDoc(db,email,function(){})

   // const collection = db.collection("MyCollection")
  /*  collection.insertOne(
        {
            name: "Buddhadeb Karmakar",
            email: email

        })

*/

    client.close();
});
