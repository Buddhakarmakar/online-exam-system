const { Server } = require("socket.io");
const { createAdapter } = require("@socket.io/mongo-adapter");
const { MongoClient } = require("mongodb");

const DB = "myTable";
const COLLECTION = "MyCollection";

const io = new Server();

const mongoClient = new MongoClient("mongodb://localhost:27017/", {
    useUnifiedTopology: true,
});

const main = async () => {
    await mongoClient.connect();

    try {
        await mongoClient.db(DB).createCollection(COLLECTION, {
            capped: true,
            size: 1e6
        });
    } catch (e) {
        // collection already exists
    }
    const mongoCollection = mongoClient.db(DB).collection(COLLECTION);

    io.adapter(createAdapter(mongoCollection));
    io.listen(3000);
}

main();