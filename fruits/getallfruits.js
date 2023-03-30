import { client, fruitCollection } from "../mongoconnect.js";

const GetAllFruits = async () => {
  try {
    await client.connect();
    const allFruits = await fruitCollection.find().toArray();
    console.log(allFruits);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};
GetAllFruits();

// this is a test for github
