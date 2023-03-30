import dotenv from 'dotenv'

dotenv.config()
const MONGOURI = process.env.MONGOURI

import{MongoClient} from 'mongodb'

export const fortuneCookie = 'testing'

//create instance of mongo 
export const client = new MongoClient(MONGOURI)

//connect to db- or create if there is none
const database = client.db("products");

//connect to collection -or create if none
export const fruitCollection = database.collection("fruits");