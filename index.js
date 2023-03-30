import { client } from "./mongoconnect.js";
import { fortuneCookie } from "./mongoconnect.js";

//create an instance of Mongo
// const client = new MongoClient(MONGOURI)

//connect to the client
// client.connect();

//connect to db- or create if there is none
const database = client.db("products");

//connect to collection -or create if none
//const collection = database.collection("fruits");






const GetAllFruits = async () => {
  try {
    const allFruits = await collection.find().toArray();
    console.log(allFruits);
  } catch (error) {
    console.log(allFruits);
  } finally {
    await client.close();
  }
};

const addFruitAnother = async () => {
  const myFruit = {
    name: "cantalooupe",
    taste: "sour",
    price: 4,
    stock: 5,
  };

  const addedFruit = await collection.insertOne(myFruit);
  console.log(addedFruit);
};

// addFruitAnother();

const getAllFruits = async () => {
  const allFruits = await collection.find().toArray();
  console.log(allFruits);
};
//getAllFruits()

const deletedFruit = async () => {
  try {
    const itemDeleted = await collection.deleteOne({ name: "pineapple" });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }

  //    const  itemDeleted = await collection.deleteOne({name: 'pineapple'})
  //     console.log(itemDeleted)
};

deletedFruit();
