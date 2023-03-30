import { client,fruitCollection } from "../mongoconnect.js";

const editfruit = async () => {
    //collection.findOner({name:'Pear'})
    client.connect();
    const updatedFruit = await fruitCollection.findOne(
      { name: "pineapple" },
      { $set: { name: "Pear" } }
    );
  
    console.log(updatedFruit);
  };
  
  //editfruit()