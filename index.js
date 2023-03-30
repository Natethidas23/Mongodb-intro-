import { client } from "./mongoconnect.js";

//create an instance of Mongo
// const client = new MongoClient(MONGOURI)

//connect to the client
client.connect();

//connect to db- or create if there is none
const database = client.db("products");

//connect to collection -or create if none
const collection = database.collection("fruits");

const addFruit = async () => {
  const myFruit = {
    name: "pear",
    taste: "juicy",
    price: 2,
    stock: 100,
  };
  try {
    await client.connect();
    const addedFruit = await collection.insertOne(myFruit);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close;
  }

  // const addedFruit = await collection.insertOne(myFruit)
  // console.log(addedFruit)
};
addFruit();

const editfruit = async () => {
  //collection.findOner({name:'Pear'})
  const updatedFruit = await collection.findOne(
    { name: "pineapple" },
    { $set: { name: "Pear" } }
  );

  console.log(updatedFruit);
};

//editfruit()
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

addFruitAnother();

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
