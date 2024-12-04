import { MongoClient } from 'mongodb'

const REMOTE_URI = 'mongodb+srv://t70a:mqMciG6m.AH@mongodb.guuvb.mongodb.net/?retryWrites=true&w=majority&appName=Mongodb'
const LOCAL_URI = 'mongodb://root:root@localhost:27017'

const mongoClient = new MongoClient(LOCAL_URI)

export default mongoClient
