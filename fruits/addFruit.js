import { client,fruitCollection } from "../mongoconnect.js";
//connect to db first then do function 

const addFruit = async () => {
    const myFruit = {
      name: "pear",
      taste: "juicy",
      price: 2,
      stock: 100,
    };
    try {
      await client.connect();
      const addedFruit = await fruitCollection.insertOne(myFruit);
      console.log('fruit added')
    } catch (error) {
      console.log(error);
    } finally {
      await client.close;
    }
  
    // const addedFruit = await collection.insertOne(myFruit)
    // console.log(addedFruit)
  };
  addFruit();