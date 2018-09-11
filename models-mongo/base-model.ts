import {ConfigImpl} from "../config";

var MongoClient = require("mongodb").MongoClient;

export abstract class BaseModel {
    abstract CollectionName: string
    mongoURL: string
    mongoDbName: string

    constructor() {
        this.mongoURL = new ConfigImpl().mongodb.url
        this.mongoDbName = new ConfigImpl().mongodb.dbName
    }

    public connectDB(callback: (client: any, connection: any) => void) {
        return MongoClient.connect(this.mongoURL)
            .then((client: any) => {
                callback(client, client.db(this.mongoDbName).collection(this.CollectionName))
            }).catch(() => {
                console.log("are we here")
                callback(null, null)
            });
    }
}