import { client,fruitCollection } from "../mongoconnect.js";
const deletedFruit = async () => {
    client.connect();
    try {
      const itemDeleted = await collection.deleteOne({ name:"cantalooupe" });
    } catch (error) {
      console.log(error);
    } finally {
      client.close();
    }
}