import { client,fruitCollection } from "../mongoconnect.js";
client.connect();
const GetAllFruits = async () => {
    try {
      const allFruits = await fruitCollection.find().toArray();
      console.log(allFruits);
    } catch (error) {
      console.log(allFruits);
    } finally {
      await client.close();
    }
  };
  GetAllFruits();